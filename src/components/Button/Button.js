import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 150px;
    height: 30px;
    text-align: center;
    background-color: #000;
    color: #FFF;
    border: 2px solid #000;

    :hover {
        border-color: blue;
    }
`;

const Button = ({ children }) => {
    return (
        <ButtonStyle>{ children }</ButtonStyle>
    )
}

export default Button;