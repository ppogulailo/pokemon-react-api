import { configureStore, combineReducers } from '@reduxjs/toolkit'
import type { AsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import pokemonReducer from './reducer/poke.reducer.ts'

const reducers = combineReducers({
    pokemons: pokemonReducer,
})

const store = configureStore({
    reducer: reducers,
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type GenericAsyncThunk = AsyncThunk<
    unknown,
    unknown,
    {
        state: RootReducer
        dispatch: AppDispatch
        rejectValue?: string
    }
>
export type PendingAction = ReturnType<GenericAsyncThunk['pending']>

export const useAppDispatch = () => useDispatch<AppDispatch>()
