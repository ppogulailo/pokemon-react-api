import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Main from '../atom/Main.tsx'
import { useTypeSelector } from '../../../hooks/useTypeSelector.ts'
import { ErrorStickyHeader } from './ErrorBlock.tsx'

const Layout = () => {
    const { error } = useTypeSelector(state => state.pokemons)
    return (
        <>
            <Header />
            {error && (
                <section aria-live="assertive" aria-label="Error">
                    <ErrorStickyHeader error={error} />
                </section>
            )}
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}

export default Layout
