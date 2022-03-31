import React, { FC, useEffect, useState } from "react";
import { useContext } from "react";
import Player from "../../components/Player";
import { IPlayers } from "../../interfaces/IPlayers";
import api from "../../services/Axios";
import { AuthContext } from "../../services/Context";
import { Container, GameContainer } from "./style";

const Game: FC = () => {
  const { userId } = useContext(AuthContext);
  
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
          ? players.map(({ posLeft, posRight, posX, posY, name }) => (
              <Player
                posLeft={posLeft}
                posRight={posRight}
                posX={posX}
                posY={posY}
                name={name}
              />
            ))
          : ""}
        {userId}
      </GameContainer>
    </Container>
  );
};

export default Game;
