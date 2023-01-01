import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: grid;
  margin-top: 80px;
  grid-template-columns: 1.5fr 1fr;

  img {
    position: relative;
    top: -40px;
    left: 40px;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 80px;
    background-color: rgb(240, 196, 120);

    h2 {
      font-size: 30px;
      text-transform: uppercase;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    p {
      text-align: start;
      line-height: 1.5;
      margin-bottom: 16px;
    }

    span {
      font-size: 14px;
      align-self: flex-start;
      cursor: pointer;
    }
  }

  .teste {
    margin-top: 200px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0;

    img {
      position: initial;
    }
  }

  @media screen and (max-width: 769px) {
    margin-top: 10px;

    div {
      padding: 0 20px;
    }
  }
`;
