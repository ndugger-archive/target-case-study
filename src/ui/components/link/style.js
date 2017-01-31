import Styled from 'styled-components';

import { link } from '../../palette';

export const Link = Styled.a`
    font-weight: 700;
    color: ${ link };
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
