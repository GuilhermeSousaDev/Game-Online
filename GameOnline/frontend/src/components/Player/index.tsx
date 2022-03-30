import React, { FC, useEffect, useState } from "react";
import { IPosition } from "../../interfaces/IPosition";
import api from "../../services/Axios";

const Player: FC = () => {
  const [pos, setPos] = useState<IPosition & { name: string | null }>();

  useEffect(() => {
    if (!pos) {
      setPos({
        posLeft: Math.floor(Math.random() * 500),
        posRight: Math.floor(Math.random() * 500),
        posX: Math.floor(Math.random() * 500),
        posY: Math.floor(Math.random() * 500),
        name: localStorage.getItem("nickname"),
      });
    }

    (async () => {
      if (localStorage.getItem("nickname")) {
        const { data } = await api.post("game", pos);

        console.log(data);

        localStorage.removeItem("nickname");
      }
    })();
  }, [pos]);

  return (
    <div
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        background: "green",
        border: "2px solid black",
        marginLeft: Math.floor(Math.random() * 500),
        marginRight: Math.floor(Math.random() * 500),
        marginTop: Math.floor(Math.random() * 500),
        marginBottom: Math.floor(Math.random() * 500),
      }}
    ></div>
  );
};

export default Player;
