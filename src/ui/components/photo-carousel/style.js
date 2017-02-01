import Styled from 'styled-components';

import Icon from '../icon';
import { medium } from '../../palette';

export const PhotoCarouselContainer = Styled.div`
    margin-top: 32px;
`;

export const PhotoCarouselCurrentImage = Styled.div`
    width: 100%;
    height: 320px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const PhotoCarouselThumbnailContainer = Styled.div`
    user-select: none;
    margin-top: 16px;
    text-align: center;
`;

export const PhotoCarouselThumbnailButton = Styled(Icon)`
    cursor: pointer
    font-size: 40px;
    line-height: 64px;
    vertical-align: middle;
`;

export const PhotoCarouselThumbnail = Styled.div`
    cursor: pointer;
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 4px;
    vertical-align: middle;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: ${ props => props.current ? `0 0 0 1px ${ medium }` : 'none' };
`;
