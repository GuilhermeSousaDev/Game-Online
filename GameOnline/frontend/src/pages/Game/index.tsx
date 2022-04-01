import React, { FC, useEffect, useState, useCallback } from "react";
import { useContext } from "react";
import Player from "../../components/Player";
import { IPlayers } from "../../interfaces/IPlayers";
import api from "../../services/Axios";
import { AuthContext } from "../../services/Context";
import { Container, GameContainer } from "./style";

const Game: FC = () => {
  const { userId } = useContext(AuthContext);

  const [players, setPlayers] = useState<IPlayers[]>();
  const [keys] = useState<string[]>(["w", "a", "s", "d"]);

  const handleMove = useCallback(
    (key) => {
      keys.map((k) => {
        if (key === k) {
          switch (key) {
            case "w":
              const player = players?.filter((p) => p.id === userId) as
                | IPlayers
                | undefined;

              console.log(player);
              break;
            case "a":
              console.log("a");
              break;
            case "s":
              console.log("s");
              break;
            case "d":
              console.log("d");
              break;
            default:
              console.log("n");
              break;
          }
        }
      });
    },
    [keys, players, userId]
  );

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleMove(e.key));

    (async () => {
      if (!players) {
        const { data } = await api.get("game");

        setPlayers(data);
      }
    })();
  }, [players, handleMove]);

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
