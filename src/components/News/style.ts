import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin-top: 40px;

  > h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const NewsContent = styled.div`
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;

    h1 {
      font-size: 14px;
      background-color: #ccc;
      border-radius: 5px;
      padding: 1px 6px;
    }
  }

  a {
    color: white;
    text-decoration: none;
    max-width: 500px;
    margin-bottom: 10px;
    :hover {
      color: #ccc;
    }
  }
`;
