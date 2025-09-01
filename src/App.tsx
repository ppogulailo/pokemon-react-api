import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/styles/organisms/Layout.tsx'
import { PokePage } from './components/pages/poke.page.tsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<Layout />}>
                <Route path="/" element={<PokePage />} />
            </Route>
            {/*<Route path="*" element={<NotFountPage />} />*/}
        </Route>,
    ),
)
const App = () => {
    return <RouterProvider router={router} />
}

export default App
