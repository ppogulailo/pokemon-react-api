import type * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'pokemon-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                name?: string
            }
        }
    }
}
