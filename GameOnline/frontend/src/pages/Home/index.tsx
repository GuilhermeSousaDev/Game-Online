import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "./style";

const Home: FC = () => {
  return (
    <Container>
      <h2>Game Online</h2>
      <Link to={"/register"}>
        <Button>Play</Button>
      </Link>
    </Container>
  );
};

export default Home;
