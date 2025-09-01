import styled from 'styled-components'
import { motion } from 'framer-motion'

const LoadWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const Loader = styled(motion.div)`
    border: 8px solid;
    border-radius: 50%;
    border-top: 8px solid;
    border-bottom: 8px solid;
    width: 70px;
    height: 70px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const VisuallyHidden = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`

const Load = () => (
    <LoadWrapper role="status" aria-live="polite">
        <Loader />
        <VisuallyHidden>Loading…</VisuallyHidden>
    </LoadWrapper>
)

export default Load
