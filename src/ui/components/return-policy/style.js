import Styled from 'styled-components';

import { medium } from '../../palette';

export const ReturnPolicy = Styled.article`
    display: flex;
    align-items: center;
    margin: 24px 0;
`;

export const ReturnPolicyLabel = Styled.h3`
    flex: 0 1;
    margin: 0;
    padding: 0;
    font-weight: 400;
`;

export const ReturnPolicyContent = Styled.p`
    flex: 1 1;
    margin: 0 0 0 12px;
    padding: 0 0 0 12px;
    font-size: 10px;
    border-left: 1px solid ${ medium };
`;
