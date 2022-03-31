import React, { FC, useEffect, useState } from "react";
import Player from "../../components/Player";
import { IPlayers } from "../../interfaces/IPlayers";
import api from "../../services/Axios";
import { Container, GameContainer } from "./style";

const Game: FC = () => {
  const [players, setPlayers] = useState<IPlayers[]>();

  useEffect(() => {
    (async () => {
      if (!players) {
        const { data } = await api.get("game");

        setPlayers(data);
      }
    })();
  }, [players]);

  return (
    <Container>
      <GameContainer>
        {players
          ? players.map(({ posLeft, posRight, posX, posY }) => (
              <Player
                posLeft={posLeft}
                posRight={posRight}
                posX={posX}
                posY={posY}
              />
            ))
          : ""}
        {localStorage.getItem("nickname")}
      </GameContainer>
    </Container>
  );
};

export default Game;
