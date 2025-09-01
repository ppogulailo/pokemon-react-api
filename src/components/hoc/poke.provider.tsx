import { useEffect, useCallback, useMemo } from 'react'
import type { FC, PropsWithChildren } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { getPokesThunk } from '../../redux/thunk/poke.thunk'
import Load from '../styles/organisms/Load'
import { useAppDispatch } from '../../redux/store'
import { PokeCtx } from './poke-context'

const PokeProvider: FC<PropsWithChildren> = ({ children }) => {
    const { isLoading, pokemons } = useTypeSelector(s => s.pokemons)
    const dispatch = useAppDispatch()

    const fetchPokes = useCallback(() => {
        dispatch(getPokesThunk())
    }, [dispatch])

    useEffect(() => {
        fetchPokes()
    }, [fetchPokes])

    const value = useMemo(() => ({ pokemons, fetchPokes, isLoading }), [pokemons, fetchPokes, isLoading])

    return (
        <PokeCtx.Provider value={value}>
            {children}
            {isLoading && <Load />}
        </PokeCtx.Provider>
    )
}

export default PokeProvider
