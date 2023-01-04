import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 300px;
  background-color: rgb(45, 45, 45);
`;

export const SubContainer = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  margin: 0 auto;
  padding-top: 70px;

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    padding-top: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h2 {
    font-size: 1.125rem;
    text-transform: uppercase;
    border-bottom: 1px solid white;
    padding: 4px 0px;
  }

  ul {
    list-style: none;
    text-transform: uppercase;

    li {
      margin-top: 7px;
      font-size: 0.8rem;

      a {
        color: rgb(204, 204, 204);
        :hover {
          color: #cccccccc;
        }
      }
    }
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-size: 1.125rem;
    text-transform: uppercase;
    padding: 4px 0px;
  }

  ul {
    list-style: none;

    li {
      margin-top: 7px;
      font-size: 0.9rem;
      a {
        color: rgb(204, 204, 204);
        :hover {
          color: #cccccccc;
        }
      }
    }
  }
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const LinksMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    font-size: 0.9rem;
    text-transform: uppercase;
    text-align: center;
    margin: 20px;
  }

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 0px 10px;

  button {
    width: 450px;
    padding: 16px;
    background-color: rgb(68, 68, 68);
    color: rgb(153, 153, 153);
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
  }

  @media screen and (max-width: 769px) {
    align-items: center;
    padding: 0 30px;

    button {
      width: 100%;
    }
  }
`;

export const Foot = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin-top: 10px;

  span {
    font-size: 0.9rem;
  }

  strong {
    font-weight: 400;
    font-size: 0.7rem;
    color: red;
  }

  @media screen and (max-width: 359px) {
    span {
      text-align: center;
      padding: 0px 5px;
    }
  }
`;
