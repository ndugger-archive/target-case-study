import Styled from 'styled-components';

import { black, white } from './palette';

export const Page = Styled.main`
    box-sizing: border-box;
    width: 100%;
    max-width: 1000px;
    margin: 50px auto;
    font-family: 'Roboto', sans-serif;
    color: ${ black };
    background: ${ white };

    @media (max-width: 500px) {
        padding: 8px;
    }
`;

export const FlexContainer = Styled.section`
    flex: 1 1;
    display: flex;

    @media (max-width: 500px) {
        flex-basis: 100%;
        flex-wrap: wrap;
    }
`;

export const FlexItem = Styled.article`
    flex: 1 1;
    margin: 0 4px;

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;
