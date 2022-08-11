import React, { useState } from 'react';
import styled from 'styled-components';
import Submit from '../Submit/Submit';

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
  font-weight: normal;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) => active && `
    border-bottom: 2px solid black;
    opacity: 1;
    font-weight: bold;
  `}
`;

const NameEmailDiv = styled.div`
  float: left;
  width: 50%;
  padding-right: 20px;
`;

const FormStyle = styled.form`
  p {
    font-weight: bold;
  }
`;

const FirstRowFormDiv = styled.div`
  padding-bottom: 80px;

  input {
    width: 430px;
    height: 30px;
  }
`;

const SecondRowFormDiv = styled.div`
  textarea {
    width: 880px;
    height: 400px;
    resize: none;
  }
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
            <FormStyle>
                <FirstRowFormDiv>
                    <NameEmailDiv>
                      <p>Name</p>
                      <input name="name" type="text" placeholder="Your Name" />
                    </NameEmailDiv>
                    <NameEmailDiv>
                      <p>E-mail</p>
                      <input name="email" type="text" placeholder="Your E-mail" />
                    </NameEmailDiv>
                </FirstRowFormDiv>
                <SecondRowFormDiv>
                  <p>Message</p>
                  <textarea name="message" type="textarea" placeholder="Your message" />
                </SecondRowFormDiv>
                <Submit value="send message"/>
            </FormStyle>
        </ContactMain>
    </>
);

export default ContactPreview;
