import type { ReactNode } from 'react'

export type PokemonListEntry = {
    entry_number: number
    pokemon_species: { name: string; url: string }
}

export type PokedexResponse = {
    pokemon_entries: PokemonListEntry[]
}

export type Pokemon = {
    name: string
    base_experience: number
    sprites: { front_default: string | null }
}

export type PokeState = {
    pokemons: PokemonListEntry[] | null
    isLoading: boolean
    error?: string
    txtMessage?: string
    count?: number
}

export type PokeContextShape = {
    pokemons: PokemonListEntry[] | null
    fetchPokes: () => void
    isLoading: boolean
}

export interface ReactChildren {
    children: ReactNode
}
