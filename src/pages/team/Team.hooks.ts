import { useParams } from "react-router-dom";
import { TTeamHooks } from "./Team.types";
import { useEffect, useState } from "react";
import { Pokemon, PokemonTeam } from "../../models";
import { PokemonService } from "../../services";

export const useTeamHooks = (): TTeamHooks => {
    const { idName } = useParams();
    const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);
    const [pokemonTeamSelected, setPokemonTeamSelected] = useState<PokemonTeam | null>(null);
    const [pokemonTeam, setPokemonTeam] = useState<PokemonTeam[]>(() => {
        const storedPokemonTeam = localStorage.getItem('pokemonTeam');
        return storedPokemonTeam ? JSON.parse(storedPokemonTeam) : [];
    });

    useEffect(() => {
        const checkPokemonIdName = () => {
            if(idName) {
                handleSetPokemonTeamSelected(Number(idName))
            }
        };
    
        checkPokemonIdName();
    }, [idName]);

    const handlePokemonSelection = async (pokemonId: number) => {
        try {
            const res = await PokemonService.getPokemon(pokemonId);
            setPokemonSelected(res);
        } catch (error) {
            console.error(error);
        };
    };

    const handleSetPokemonTeamSelected = (pokemonId: number) => {
        const foundPokemon = pokemonTeam.find((pokemonTeam: PokemonTeam) => pokemonTeam.pokemon.id === pokemonId);

        if (foundPokemon) {
            setPokemonTeamSelected(foundPokemon);
        }
    };

    const addPokemonTeam = (pokemon: Pokemon) => {        
        const pokemonTeamToAdd: PokemonTeam = {
            pokemon,
            nick: '',
            description: ''
        };

        setPokemonTeam((prevTeam) => {
            const updatedTeam = [...prevTeam, pokemonTeamToAdd];
            localStorage.setItem('pokemonTeam', JSON.stringify(updatedTeam));
            return updatedTeam;
        });        
    };

    const updatePokemonTeam = (pokemon: PokemonTeam) => {
        const pokemonTeamToUpdate: PokemonTeam[] = pokemonTeam.map(
            (item: PokemonTeam) => {
                return item.pokemon.id === pokemon.pokemon.id
                        ? {
                            ...item,
                            nick: pokemon.nick,
                            description: pokemon.description
                        }
                        : item;
        });

        setPokemonTeam((prevTeam) => {
            localStorage.setItem('pokemonTeam', JSON.stringify(pokemonTeamToUpdate));
            return pokemonTeamToUpdate;
        });
    }

    const removePokemonFromTeam = (pokemonId: number) => {
        setPokemonTeam((prevTeam) => {
            const updatedTeam = prevTeam.filter((pokemonTeam: PokemonTeam) => pokemonTeam.pokemon.id !== pokemonId);
            localStorage.setItem('pokemonTeam', JSON.stringify(updatedTeam));
            return updatedTeam;
        });
    };

    return { idName, handlePokemonSelection, handleSetPokemonTeamSelected, pokemonSelected, pokemonTeamSelected, pokemonTeam, addPokemonTeam, updatePokemonTeam, removePokemonFromTeam };
}