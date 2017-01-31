import Styled from 'styled-components';

export const Responsive = Styled.div`
    display: none;

    @media (max-width: ${ props => props.maxWidth }px) {
        display: inherit;
    }

    @media (min-width: ${ props => props.minWidth }px) {
        display: inherit;
    }

`;
