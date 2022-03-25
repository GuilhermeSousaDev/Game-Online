import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
`;

export const GameContainer = styled.div`
    width: 500px;
    height: 500px;
    border: 2px solid black;
`;

export const Player = styled.div`
    width: 200px;
    height: 200px;
    background-color: green;
    border: 2px solid black;
`;