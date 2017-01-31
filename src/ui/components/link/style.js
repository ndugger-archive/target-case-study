import Styled from 'styled-components';

import { primary } from '../../palette';

export const Link = Styled.a`
    font-weight: 700;
    color: ${ primary };
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
