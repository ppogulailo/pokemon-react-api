import { Pokemon } from '../pokemon/pokemon.tsx'
import PokeProvider from '../hoc/poke.provider'

export const PokePage = () => {
    return (
        <PokeProvider>
            <Pokemon />
        </PokeProvider>
    )
}
