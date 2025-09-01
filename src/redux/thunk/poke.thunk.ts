import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import { PokeApi } from '../../api/poke.api'
import type { PokedexResponse } from '../../types/redux/poke.types'

export const getPokesThunk = createAsyncThunk<PokedexResponse, void, { rejectValue: string }>(
    'pokemon/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await PokeApi.getPokes()
            return data
        } catch (e) {
            const err = e as AxiosError<{ message?: string }>
            return rejectWithValue(err.response?.data?.message ?? 'Unexpected error')
        }
    },
)
