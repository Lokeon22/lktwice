import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 280px;
  background-color: rgb(45, 45, 45);
`;

export const SubContainer = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  margin: 0 auto;
  padding-top: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
  }
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  button {
    width: 400px;
    padding: 16px;
    background-color: rgb(68, 68, 68);
    color: rgb(153, 153, 153);
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
  }
`;
