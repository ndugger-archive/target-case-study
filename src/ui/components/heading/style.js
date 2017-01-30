import Styled from 'styled-components';

export const H1 = Styled.h1`
    margin: 0;
    padding: 0;
    font-size: 28px;
    font-weight: 300;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 22px;
    }
`;
