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
  const [player, setPlayer] = useState<IPlayers>();
  const [keys] = useState<string[]>(["w", "a", "s", "d"]);

  const updateUserPosition = useCallback(() => {}, []);

  const handleMove = useCallback(
    (key) => {
      if (player) {
        keys.map(async (k) => {
          if (key === k) {
            let obj = {
              id: userId,
              posLeft: player.posLeft,
              posRight: player.posRight,
              posX: player.posX,
              posY: player.posY,
            }

            switch (key) {
              case "w":
                obj = {
                  id: userId,
                  posLeft: player.posLeft,
                  posRight: player.posRight,
                  posX: player.posX,
                  posY: player.posY + 10,
                }

                await api.put('game', obj);
                break;
              case "a":
                obj = {
                  id: userId,
                  posLeft: player.posLeft + 10,
                  posRight: player.posRight,
                  posX: player.posX,
                  posY: player.posY,
                }

                await api.put('game', obj);
                break;
              case "s":
                obj = {
                  id: userId,
                  posLeft: player.posLeft,
                  posRight: player.posRight,
                  posX: player.posX + 10,
                  posY: player.posY,
                }

                await api.put('game', obj);
                break;
              case "d":
                obj = {
                  id: userId,
                  posLeft: player.posLeft,
                  posRight: player.posRight + 10,
                  posX: player.posX,
                  posY: player.posY,
                }

                await api.put('game', obj);
                break;
              default:
                console.log("n");
                break;
            }
          }
        });
      }
    },
    [keys, player, userId]
  );

  const game = async () => {
    if (players) {
      const { data } = await api.get("game");

      setPlayers(data);

      setTimeout(() => game, 1000);
    }
  }

  game();

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleMove(e.key));

    (async () => {
      if (!players) {
        const { data } = await api.get("game");

        setPlayers(data);
      }

      if (players) {
        setPlayer(players.filter((p) => p.id === userId)[0]);
      }
    })();
  }, [players, handleMove, userId, player]);

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
