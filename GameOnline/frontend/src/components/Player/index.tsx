import React, { FC } from "react";
import { IPosition } from "../../interfaces/IPosition";

const Player: FC<IPosition> = ({ posLeft, posRight, posX, posY, name }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        background: "green",
        border: "2px solid black",
        left: posLeft,
        right: posRight,
        top: posY,
        bottom: posX,
      }}
    >{ name }</div>
  );
};

export default Player;
