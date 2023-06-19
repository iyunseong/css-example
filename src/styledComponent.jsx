import React from "react";
import styled, { css } from "styled-components";
export default function StyledComponent() {
  const Container = styled.div`
    display: flex;
  `;

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #3c5b69;
    color: #b9eaff;
    margin: 0.1rem;
    padding: 0.25rem 1rem;
    ${(props) =>
      props.primary &&
      css`
        background: #009cd5;
        color: white;
      `};
  `;
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}
