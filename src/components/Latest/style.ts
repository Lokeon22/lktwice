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

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    height: 100%;
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

  @media screen and (max-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;

    img {
      width: 150px;
    }
  }

  @media screen and (max-width: 359px) {
    padding: 5px;
    img {
      width: 100px;
    }
  }
`;

export const FanNewsLatests = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;

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

  @media screen and (max-width: 1000px) {
    margin-top: 30px;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  color: rgb(250, 167, 152);
  text-transform: uppercase;
  font-size: 1.4rem;
`;

export const FanNew = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 40px;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    padding: 0px 10px;
    margin-bottom: 25px;
    gap: 15px;

    h2 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

export const SubComponent = styled.div`
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

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const ContainerFotoText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const ContentImg = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 90%;
    object-fit: contain;
    border-radius: 6px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;

    img {
      width: 80%;
    }
  }

  @media screen and (max-width: 769px) {
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: 5px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h1 {
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 769px) {
    flex-direction: row;
    display: none;
  }
`;
