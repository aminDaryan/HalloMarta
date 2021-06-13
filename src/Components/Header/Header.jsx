import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  width: 100%;
  background-color: #353e47;
  color: #22994d;
  font-size: 2.5rem;
  font-weight: 600;
`;

export default function Header() {
  return <HeaderContainer>Stock Data</HeaderContainer>;
}
