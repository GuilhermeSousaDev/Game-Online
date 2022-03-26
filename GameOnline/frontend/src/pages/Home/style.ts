import styled from "styled-components";

/*colors
  #042940
  #005C53
  #9FC131
  #DBF227
  #D6D58E
  #dc3545
*/

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  background: #042940;
  h2 {
    font-family: 'Oswald', sans-serif;  
  }
`;

export const Button = styled.button`
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: #005c53;
  width: 130px;
  height: 35px;
  font-size: 1rem;
  cursor: pointer;
`;
