import Styled from 'styled-components';

export const Button = Styled.button`
    cursor: pointer;
    width: 100%;
    padding: 8px 20px;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 18px;
    font-weight: 300;
    border-radius: 2px;
    outline: none;
    box-shadow: inset 0 4px 12px rgba(255, 255, 255, 0.5);
    transition: all .1s ease;

    &:hover {
        opacity: 0.85;
    }

    &:active {
        box-shadow: none;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;
