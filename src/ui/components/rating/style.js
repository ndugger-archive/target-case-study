import Styled from 'styled-components';

import Icon from '../icon';
import { primary, medium } from '../../palette';

export const RatingContainer = Styled.div`
    display: inline-block;
    vertical-align: sub;
`;

export const RatingStar = Styled(Icon)`
    color: ${ props => props.filled ? primary : medium };
`;
