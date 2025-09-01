import { $api } from '../config/axios'
import type { AxiosResponse } from 'axios'
import type { PokedexResponse, Pokemon } from '../types/redux/poke.types'

export const PokeApi = {
    getPokes: (): Promise<AxiosResponse<PokedexResponse>> =>
        $api.get<PokedexResponse>('pokedex/2', { withCredentials: false }),

    getPokemonByName: (name: string): Promise<AxiosResponse<Pokemon>> =>
        $api.get<Pokemon>(`pokemon/${name}`, { withCredentials: false }),
}
