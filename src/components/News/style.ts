import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin-top: 40px;

  > h2 {
    text-align: center;
    margin-bottom: 20px;
    line-height: 3;
    border-bottom: 1px solid white;
  }
`;

export const NewsContent = styled.div`
  width: 100%;
  padding: 0px 4px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 6px;
    padding: 10px 4px;
    border-top: 1px solid rgba(233, 233, 233, 0.2);

    h1 {
      font-size: 14px;
      background-color: #ccc;
      border-radius: 5px;
      padding: 1px 6px;
    }
  }

  a {
    max-width: 500px;
    align-self: flex-start;
    color: white;
    text-decoration: none;
    margin-bottom: 16px;
    :hover {
      color: #ccc;
    }
  }
`;
