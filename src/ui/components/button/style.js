import Styled from 'styled-components';

const padding = props => props.size === 'small' ? '14px' : '20px';
const fontSize = props => props.size === 'small' ? '12px' : '18px';
const fontWeight = props => props.size === 'small' ? 400 : 300;
const boxShadow = props => props.size === 'small' ? 'none' : 'inset 0 4px 12px rgba(255, 255, 255, 0.5)';
const responsiveFontSize = props => props.size === 'small' ? '10px' : '14px';

export const Button = Styled.button`
    cursor: pointer;
    width: 100%;
    padding: 8px ${ padding };
    text-transform: uppercase;
    font-family: inherit;
    font-size: ${ fontSize };
    font-weight: ${ fontWeight };;
    border-radius: 2px;
    outline: none;
    box-shadow: ${ boxShadow };
    transition: all .1s ease;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        box-shadow: none;
    }

    @media (max-width: 500px) {
        font-size: ${ responsiveFontSize };
    }
`;
