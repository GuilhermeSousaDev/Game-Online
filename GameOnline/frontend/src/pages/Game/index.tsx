import React, { FC } from "react";
import { Container, GameContainer, Player } from "./style";

const Game: FC = () => {
  return (
    <Container>
      <GameContainer>
        <Player />
      </GameContainer>
    </Container>
  );
};

export default Game;
