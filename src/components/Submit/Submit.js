import React from "react";
import styled from "styled-components";

const SubmitStyle = styled.input`
    margin-top: 20px;
    width: 200px;
    height: 35px;
    text-align: center;
    background-color: #000;
    color: #FFF;
    border: 2px solid #000;

    :hover {
        border-color: blue;
    }
`;

const Submit = ({ value }) => {
    return (
        <SubmitStyle type="submit" value={value} />
    )
}

export default Submit;