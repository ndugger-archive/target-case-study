import Styled from 'styled-components';

export const Price = Styled.h2`
    margin: 0 0 24px;
    padding: 0;
    font-size: 28px;
    font-weight: 700;

    @media (max-width: 500px) {
        font-size: 22px;
    }
`;

export const PriceType = Styled.span`
    font-size: 14px;
    font-weight: 400;
`
