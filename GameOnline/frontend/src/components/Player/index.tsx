import React, { FC } from 'react';
import { IPosition } from '../../interfaces/IPosition';

const Player: FC<IPosition> = ({ posLeft, posRight, posX, posY }) => {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            background: 'green',
            border: '2px solid black',
            marginLeft: posLeft,
            marginRight: posRight,
            marginTop: posY,
            marginBottom: posX,
        }}></div>
    )
}

export default Player;