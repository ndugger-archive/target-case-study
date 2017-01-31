import Styled from 'styled-components';

import Icon from '../icon';
import { primary, medium } from '../../palette';

export const Promotion = Styled.p`
    margin: 4px 0;
    padding: 0;
    color: ${ primary };
    font-size: 17px;
`;

export const PromotionList = Styled.article`
    margin: 16px 0;
    padding: 12px 0;
    border-top: 1px solid ${ medium };
    border-bottom: 1px solid ${ medium };
`;

export const PromotionIcon = Styled(Icon)`
    position: relative;
    top: 2px;
    margin-right: 8px;
    font-size: 16px;
    color: ${ primary };
`;
