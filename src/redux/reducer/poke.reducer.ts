import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { getPokesThunk } from '../thunk/poke.thunk'
import { isError, isPendingAction } from '../actions'
import type { PokeState } from '../../types/redux/poke.types'

const initialState: PokeState = {
    pokemons: null,
    isLoading: false,
    error: undefined,
    txtMessage: undefined,
    count: undefined,
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPokesThunk.fulfilled, (state, { payload }) => {
                state.pokemons = payload.pokemon_entries
            })
            .addMatcher(isPendingAction, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addMatcher(isError, (state, { payload }) => {
                state.error = typeof payload === 'string' ? payload : (payload?.message ?? 'Unexpected error')
                state.isLoading = false
            })
            .addMatcher(isFulfilled, state => {
                state.isLoading = false
            })
    },
})

export default pokemonSlice.reducer
