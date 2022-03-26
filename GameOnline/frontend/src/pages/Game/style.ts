import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
`;

export const GameContainer = styled.div`
  width: 600px;
  height: 600px;
  border: 2px solid black;
`;

export const Player = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  border: 2px solid black;
`;
