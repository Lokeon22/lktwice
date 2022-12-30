import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  flex-shrink: 0;
  margin-bottom: 40px;
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 20px;
      margin-top: 10px;
    }

    p {
      font-size: 28px;
      text-align: center;
      max-width: 450px;
      line-height: 1.3;
    }

    p:last-child {
      font-size: 1rem;
    }

    img {
      max-width: 450px;
    }

    span {
      font-size: 14px;
      text-align: center;
      max-width: 450px;
      line-height: 1.2;
      color: #ccc;
    }

    label:first-child {
      width: 1px;
      background-color: white;
      height: 80px;
    }

    label {
      width: 1px;
      background-color: white;
      height: 30px;
    }

    @media screen and (max-width: 768px) {
      img {
        width: 100%;
      }

      p {
        max-width: 300px;
      }
    }
  }
`;
