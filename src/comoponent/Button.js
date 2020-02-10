import styled from "styled-components";


export const ButtonContainer = styled.button`
text-transform:capitalize;
background: transparent;
font-size: 17px;
border: 1px solid var(--mainYellow);
color: var(--mainBlue);
border-radius: 5px;
padding: 4px 10px;
margin: 0px 10px;
cursor: pointer;
transition: all 1s ease-in-out;
&:hover{
  background: var(--mainOrange);
  color: var(--mainWhite);
}
`