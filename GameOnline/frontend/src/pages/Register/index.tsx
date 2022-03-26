import React, { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, LoginContainer } from "./style";

const Register: FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>("");

  const handleRedirectRoom = useCallback(() => {
    if (nickname) {
      localStorage.setItem("nickname", nickname);
      navigate("/game");
    }
  }, [nickname, navigate]);

  return (
    <Container>
      <LoginContainer>
        <h1>Write your Nickname</h1>
        <span>Your Nickname</span>
        <br />
        <div>
          <input
            onChange={(e) => setNickname(e.target.value)}
            type="text"
            name="name"
            placeholder="Nickname..."
          />
        </div>
        <br />
        <Button onClick={handleRedirectRoom}>Enter on Room</Button>
      </LoginContainer>
    </Container>
  );
};

export default Register;
