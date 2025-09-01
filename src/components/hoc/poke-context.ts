import { createContext, useContext } from 'react'
import type { PokeContextShape } from '../../types/redux/poke.types'

export const PokeCtx = createContext<PokeContextShape>({
    pokemons: [],
    fetchPokes: () => {},
    isLoading: false,
})
export function usePoke(): PokeContextShape {
    const ctx = useContext(PokeCtx)
    if (!ctx) throw new Error('usePoke must be used within <PokeProvider>')
    return ctx
}
