export interface Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: {
        HP: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
    apiTypes: {
        name: string;
        image: string;
    }[];
    apiGeneration: number;
    apiResistances: {
        name: string;
        damage_multiplier: number;
        damage_relation: string;
    }[];
    resistanceModifyingAbilitiesForApi: {
        name: string;
        slug: string;
    }[],
    apiEvolutions: {
        name: string;
        pokedexId: number;
    }[],
    apiPreEvolution: {
        name: string;
        pokedexIdd: number;
    };
    apiResistancesWithAbilities: {
        name: string;
        damage_multiplier: number;
        damage_relation: string;
    }[];
}

export interface TypePokemon {
    id: number
    name: string;
    image: string;
    englishName: string;
}

export interface PokemonTeam {
    pokemon: Pokemon;
    nick: string;
    description: string;
}