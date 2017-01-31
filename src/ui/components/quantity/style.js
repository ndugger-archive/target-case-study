import Styled from 'styled-components';

import Icon from '../icon';
import { medium } from '../../palette';

export const QuantityContainer = Styled.section`
    user-select: none;
    width: calc(50% - 4px);
    margin: 24px 0 20px;
    padding: 4px 12px
    border: 1px solid ${ medium };
    border-radius: 2px;
    box-sizing: border-box;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const QuantityClearFix = Styled.div`
    clear: both;
`;

export const QuantityLabel = Styled.header`
    float: left;
    width: 50%;
    line-height: 32px;
`;

export const QuanitityChanger = Styled.div`
    float: right;
    width: 50%;
    text-align: right;
`;

export const QuantityButton = Styled(Icon)`
    cursor: pointer;
    color: ${ medium };
    vertical-align: middle;

    &:hover {
        opacity: 0.8;
    }
`;

export const QuanitityValue = Styled.span`
    display: inline-block;
    margin: 0 12px;
    font-size: 20px;
    font-weight: 700;
    vertical-align: middle;
`
