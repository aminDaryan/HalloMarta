import styled, { keyframes } from 'styled-components';

const appear = keyframes`
from {
  transform: translateY(5rem);
  opacity: 0;
}

to {
  transform: translateY(0);
  opacity: 1;
}
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15rem;
`;

export const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7rem;
  height: 5rem;
`;

export const Input = styled.input`
  background-color: #eef1f2;
  width: 20rem;
  padding: 1rem;
  border: none;
  transition: 0.5s all ease-out;
  font-size: 1.6rem;

  &:focus-visible {
    outline: none;
    border-bottom: 2px #353e47 solid;
  }
`;

export const SearchButton = styled.input`
  background-color: #1ba94d;
  color: white;
  border: none;
  margin-left: 2rem;
  padding: 1rem;
  width: 10rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0.5rem 1rem 0px rgba(27, 228, 97, 0.85);
  cursor: pointer;
  transition: 0.3s all ease-out;
  font-size: 1.6rem;

  &:hover {
    box-shadow: 0px 0.5rem 1rem 0px rgba(27, 228, 97, 0.65);
  }

  &:active {
    transform: translateY(0.3rem);
  }
`;

export const ResultsContainer = styled.div``;

export const DataContainer = styled.ul`
  animation: ${appear} 0.7s ease-in;
  list-style-type: none; /* Remove bullets */
`;

export const DataBox = styled.li`
  margin-bottom: 1.5rem;
  background-color: white;
  box-shadow: 0px 0.5rem 2rem 0px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 20rem;
`;

export const NoResultsMessage = styled.div`
  animation: ${appear} 0.7s ease-in;
  font-weight: 600;
`;
