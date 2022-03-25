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
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.075rem 5.85rem;
  font-size: 2rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: #005C53;
  font-family: 'Bebas Neue', cursive;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
`;
