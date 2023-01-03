import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  flex-shrink: 0;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 200px 4fr;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  background-color: rgb(142, 26, 14, 0.5);
  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    padding: 0px;
  }
`;

export const FanNewsLatests = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;

  h2 {
    color: rgb(250, 167, 152);
    text-transform: uppercase;
  }

  p {
    font-size: 0.7rem;
    text-transform: uppercase;
    color: black;
    padding: 4px 12px;
    border-radius: 20px;
    background-color: rgb(230, 230, 230);
  }

  span {
    color: rgb(153, 155, 156);
  }

  a {
    color: rgb(255, 95, 171);
    :hover {
      color: rgba(255, 95, 171, 0.7);
    }
  }
`;

export const FanNew = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 40px;
  margin-bottom: 50px;

  .subcontent {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap: 15px;
    }

    h1 {
      margin-top: 10px;
      font-size: 1.2rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
`;

export const FanLatest = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 0px 40px;

  h2 {
    font-size: 1.4rem;
    margin-top: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;

    img {
      width: 90%;
      object-fit: contain;
      border-radius: 6px;
    }

    div {
      display: flex;
      gap: 15px;
      margin-top: 4px;
    }

    h1 {
      margin-top: 10px;
      font-size: 1.2rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
`;
