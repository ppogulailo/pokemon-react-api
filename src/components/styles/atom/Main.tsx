import styled from 'styled-components'
import type { ReactChildren } from '../../../types/redux/poke.types'

const Wrapper = styled.main`
    width: 100%;
    min-height: 100dvh;
`

export const Container = styled.div`
    padding: 2rem 3rem;
`

const Main = ({ children }: ReactChildren) => (
    <Wrapper>
        <Container>{children}</Container>
    </Wrapper>
)

export default Main
