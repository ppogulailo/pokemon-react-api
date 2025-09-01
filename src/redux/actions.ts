import type { AnyAction } from '@reduxjs/toolkit'
import type { PendingAction } from './store.ts'

interface RejectedAction extends AnyAction {
    error: { message?: string }
}

export function isError(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('/rejected')
}

export function isPendingAction(action: AnyAction): action is PendingAction {
    return action.type.endsWith('/pending')
}
