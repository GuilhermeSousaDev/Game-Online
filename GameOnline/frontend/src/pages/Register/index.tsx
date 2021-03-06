import React, { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPlayers } from "../../interfaces/IPlayers";
import api from "../../services/Axios";
import { Button, Container, LoginContainer } from "./style";

const Register: FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>("");

  const handleRedirectRoom = useCallback(async () => {
    if (nickname) {
      const { data } = await api.post<IPlayers>("game", { name: nickname });

      localStorage.setItem("user_id", data.id);

      navigate("/game");

      // eslint-disable-next-line no-restricted-globals
      location.reload();
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
