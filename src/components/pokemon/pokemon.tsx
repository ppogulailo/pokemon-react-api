import { useState } from 'react'
import { usePoke } from '../hoc/poke-context'

export const Pokemon = () => {
    const { pokemons } = usePoke()
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <section aria-labelledby="pokedex-heading" style={section}>
            <h2 id="pokedex-heading" style={heading}>
                Pokédex
            </h2>

            <ul role="listbox" aria-label="Pokémon list" style={grid}>
                {pokemons?.map(pokemon => {
                    const pokemonName = pokemon.pokemon_species.name
                    const isSelected = selected === pokemonName

                    return (
                        <li key={pokemon.entry_number} style={{ listStyle: 'none' }}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                style={{ ...card, ...(isSelected ? selectedCard : {}) }}
                                onClick={() => setSelected(pokemonName)}
                            >
                                {isSelected ? (
                                    // todo: investigate related issue
                                    <pokemon-card name={pokemonName}></pokemon-card>
                                ) : (
                                    <h3>{pokemonName}</h3>
                                )}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

const section: React.CSSProperties = { padding: '16px' }
const heading: React.CSSProperties = { margin: '0 0 8px 0' }
const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '12px',
    margin: 0,
    padding: 0,
}
const card: React.CSSProperties = {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '8px',
    background: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    transition: 'all 0.3s ease',
}
const selectedCard: React.CSSProperties = {
    gridColumn: 'span 2',
    gridRow: 'span 2',
    padding: '16px',
    background: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}
