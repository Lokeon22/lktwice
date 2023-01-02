import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;

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
`;

export const FanNew = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 40px;
`;

export const FanLatest = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 0px 40px;

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-top: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      border-radius: 5px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: 4px;
    }

    h1 {
      text-transform: uppercase;
      font-size: 1rem;
      margin-top: 4px;
    }
  }
`;
