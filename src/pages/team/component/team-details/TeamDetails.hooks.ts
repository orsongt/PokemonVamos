import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTeamHooks } from "../../Team.hooks";
import { PokemonTeam } from "../../../../models";
import { TTeamDetailsHooks } from "./TeamDetails.types";

export const useTeamDetailsHooks = (): TTeamDetailsHooks => {
    const { idName, pokemonTeamSelected, updatePokemonTeam, removePokemonFromTeam, pokemonTeam } = useTeamHooks();
    const [pokemonNick, setPokemonNick] = useState<string>('');
    const [pokemonDescription, setPokemonDescription] = useState<string>('');
    const [isFormUpdated, setIsFormUpdated] = useState<boolean>(false);
    const [pokemonTeamToShow, setPokemonTeamToShow] = useState<PokemonTeam[]>([]);
    const navigate = useNavigate();

    const handleSetPokemonNick = (nick: string) => {
        setPokemonNick(nick);
    };

    const handleSetPokemonDescription = (description: string) => {
        setPokemonDescription(description);
    };

    const handleFormChanges = () => {
        const isDifferentNick = (pokemonNick !== pokemonTeamSelected?.nick);
        const isDifferentDescription = (pokemonDescription !== pokemonTeamSelected?.description);
        
        setIsFormUpdated(isDifferentNick || isDifferentDescription);
    };

    const handleSetPokemonTeamToShow = (pokemonTeamToShow: {id: number, name: string}[]) => {
        const idPokemonToShow: number[] = pokemonTeamToShow.map((pokemonToShow: {id: number, name: string}) => (pokemonToShow.id));
        let pokemonTeamFiltered: PokemonTeam[] = [];

        idPokemonToShow.forEach((id: number) => {
            const found = pokemonTeam.find((pokemon: PokemonTeam) => pokemon.pokemon.id === id);
            if (found) {
                pokemonTeamFiltered.push(found);
            }
        });

        setPokemonTeamToShow(pokemonTeamFiltered);
    };

    const removePokemon = (pokemonId: number, event?: SyntheticEvent<HTMLSpanElement>) => {
        if (event) {
            event.preventDefault();
        }
        
        removePokemonFromTeamToShow(pokemonId);
        removePokemonFromTeam(pokemonId);
    }

    const removePokemonFromTeamToShow = (pokemonId: number) => {
        const updatedTeam: PokemonTeam[] = pokemonTeamToShow.filter((pokemonTeam: PokemonTeam) => pokemonTeam.pokemon.id !== pokemonId);
        setPokemonTeamToShow(updatedTeam);
    }

    const handleUpdatePokemonTeam = () => {
        if (pokemonTeamSelected?.pokemon) {
            const pokemonSelectedToUpdate: PokemonTeam = {
                pokemon: pokemonTeamSelected?.pokemon,
                nick: pokemonNick,
                description: pokemonDescription
            }

            updatePokemonTeam(pokemonSelectedToUpdate);
        }
    }

    useEffect(() => {
        const checkPokemonIdName = () => {           
            const foundPokemon = pokemonTeam.find((pokemonTeam: PokemonTeam) => pokemonTeam.pokemon.id === Number(idName));
            handleSetPokemonNick(foundPokemon?.nick ? foundPokemon.nick : '');
            handleSetPokemonDescription(foundPokemon?.description ? foundPokemon.description : '');
            
            if (!foundPokemon) {
                navigate('/error');
            }
        };
    
        checkPokemonIdName();
    }, [idName]);

    useEffect(() => {
        handleFormChanges();
    }, [pokemonNick, pokemonDescription]);

    useEffect(() => {
        setIsFormUpdated(false);
    }, [pokemonTeam, pokemonTeamSelected]);

    return {
        pokemonTeamSelected, pokemonTeam,
        pokemonNick, pokemonDescription, handleSetPokemonNick, handleSetPokemonDescription, isFormUpdated, pokemonTeamToShow, handleSetPokemonTeamToShow, removePokemon, handleUpdatePokemonTeam
    };
};