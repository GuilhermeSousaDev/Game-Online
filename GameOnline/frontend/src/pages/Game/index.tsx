import React, { FC } from "react";
import { Container, GameContainer, Player } from "./style";

const Game: FC = () => {
  return (
    <Container>
      <GameContainer>
        <Player />
        {localStorage.getItem('nickname')}
      </GameContainer>
    </Container>
  );
};

export default Game;
