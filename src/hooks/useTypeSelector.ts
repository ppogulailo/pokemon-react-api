import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootReducer } from '../redux/store.ts'

export const useTypeSelector: TypedUseSelectorHook<RootReducer> = useSelector
