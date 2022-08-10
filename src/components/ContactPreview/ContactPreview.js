import React, { useState } from 'react';
import styled from 'styled-components';

const ContactMain = styled.div`
    float: left;
`;

const P1 = styled.p`
    font-weight: bold;
`;

const types = ["project", "cooperation", "other"];

const Button = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) => active && `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

function ButtonList() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Button key={type} active={active === type} onClick={() => setActive(type)}>
            {type}
          </Button>
        ))}
      </div>
    </>
  );
}

const ContactPreview = () => (
    <>
        <ContactMain>
            <P1>Contact reason</P1>
            <ButtonList />
        </ContactMain>
    </>
);

export default ContactPreview;
