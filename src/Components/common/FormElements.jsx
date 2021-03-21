import styled from 'styled-components';

export const Input = styled.input`
    border: 2px solid #ccc;
    max-height: 30px;
    ${props => props.type === 'text' ? `
    max-width: 400px;
    min-width: 300px;
    padding: 15px;`: null}

    &:focus {
        border: 2px solid #000;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: 2px solid #000;
    border-radius: 15px;

    transition: background-color .3s ease,
                color .3s ease;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`;