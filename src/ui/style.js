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

export const Grid = Styled.section`
    width: 100%;
`;

Grid.Half = Styled.section`
    float: left;
    width: 50%;
    padding: 8px;
    box-sizing: border-box;

    &:nth-of-type(2n) {
        float: right
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Flex = Styled.div`
    display: flex;
`;

Flex.Item = Styled.div`
    flex: 1 1;
    margin: 4px;

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;
