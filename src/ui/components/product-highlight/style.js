import Styled from 'styled-components';

export const ProductHighlightList = Styled.article`
    margin-bottom: 32px;
`;

export const ProductHighlightHeading = Styled.h3`
    margin: 24px 0;
    padding: 0;
    font-size: 40px;
    font-weight: 400;
`;

export const ProductHighlightContent = Styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ProductHighlight = Styled.li`
    margin-bottom: 8px;

    &::before {
        content: '•';
        display: inline-block;
        margin-right: 16px;
    }
`;
