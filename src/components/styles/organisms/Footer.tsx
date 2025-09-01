import styled from 'styled-components'
import { FaCubes } from 'react-icons/fa'

const FooterEl = styled.footer`
    background-color: lightblue;
    padding: 1rem 6rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

const FootNote = styled.p`
    margin: 0;
`

const Footer = () => (
    <FooterEl>
        <FaCubes size={42} color={'hsl(349,52%,61%)'} />
        <FootNote>Footer</FootNote>
    </FooterEl>
)

export default Footer
