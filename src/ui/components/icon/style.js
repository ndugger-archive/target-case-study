import Styled from 'styled-components';

import { medium } from '../../palette';

export const Icon = Styled.i`
    font-size: ${ props => props.size }px;
    letter-spacing: -4px;
    color: ${ props => props.color || medium };
`;
