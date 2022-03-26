import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  h1 {
    margin-bottom: 10%;
    font-family: 'Oswald', sans-serif; 
    color: white;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 400px;
  border: 2px solid black;
  border-radius: 20px;
  input {
    background-color: #D6D58E;
    text-align: center;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    :focus {
      border: 2px solid #042940;
    }
  }
  span {
    font-family: 'Oswald', sans-serif; 
    font-size: 20px;
    letter-spacing: 5px;
  }
`;

export const Button = styled.button`
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: #042940;
  color: #fff;
  width: 130px;
  height: 35px;
  font-size: 1rem;
  cursor: pointer;
`;