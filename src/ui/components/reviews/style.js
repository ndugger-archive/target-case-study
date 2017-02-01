import Styled from 'styled-components';

import { grey, medium } from '../../palette';

export const ReviewsContainer = Styled.section`
    margin: 8px 0;
    padding: 16px;
    background: ${ grey };
    border-radius: 2px;

    @media (max-width: 500px) {
        padding: 0 16px;
    }
`;

export const ReviewsClearFix = Styled.div`
    clear: both;
`;

export const ReviewSide = Styled.article`
    width: 50%;
    float: left;
    box-sizing: border-box;

    &:first-of-type {
        padding-right: 12px;
    }

    &:last-of-type {
        padding-left: 12px;
    }

    @media (max-width: 500px) {
        width: 100%;
        float: none;
        padding: 16px 0;

        &:first-of-type {
            padding-right: 0;
        }

        &:last-of-type {
            padding-left: 0;
        }
    }
`;

export const ReviewType = Styled.header`
    margin-bottom: 16px;
    padding-bottom: 16px;
    font-size: 20px;
    border-bottom: 1px solid ${ medium };
`;

export const ReviewTypeDescription = Styled.div`
    font-size: 14px;
`;

export const ReviewTitle = Styled.header`
    margin-bottom: 4px;
    font-weight: 700;
`;

export const ReviewContent = Styled.p`
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 18px;
`;

export const ReviewAuthor = Styled.div`
    margin-top: 8px;
    font-size: 12px;
`;
