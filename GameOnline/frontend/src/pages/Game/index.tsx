import React, { FC, useEffect, useState } from "react";
import Player from "../../components/Player";
import { IPosition } from "../../interfaces/IPosition";
import api from "../../services/Axios";
import { Container, GameContainer } from "./style";

const Game: FC = () => {
  const [pos, setPos] = useState<IPosition & { name: string | null }>();

  useEffect(() => {
    if (!pos) {
      setPos({
        posLeft: Math.floor(Math.random() * 600),
        posRight: Math.floor(Math.random() * 600),
        posX: Math.floor(Math.random() * 600),
        posY: Math.floor(Math.random() * 600),
        name: localStorage.getItem('nickname'),
      });

      (async () => {
        const { data } = await api.post('game', pos);

        console.log(data);
      })();
    }
  }, [pos]);

  return (
    <Container>
      <GameContainer>
          { pos? 
            <Player
              posLeft={pos?.posLeft}
              posRight={pos?.posRight}
              posX={pos?.posX}
              posY={pos?.posY}
            /> : '' 
          }
        {localStorage.getItem('nickname')}
      </GameContainer>
    </Container>
  );
};

export default Game;
