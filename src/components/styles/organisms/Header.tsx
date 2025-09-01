import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'

const HeaderEl = styled.header`
    background-color: lightblue;
    z-index: 5;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    margin: 0 6rem;
`

export const Title = styled.h1`
    margin-left: 1rem;
`

const StyledIconReact = styled(FaReact)`
    color: hsl(349, 52%, 61%);
`

const Header = () => (
    <HeaderEl>
        <Wrapper>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity }}>
                <StyledIconReact size={42} />
            </motion.div>
            <Title>React App</Title>
        </Wrapper>
    </HeaderEl>
)

export default Header
