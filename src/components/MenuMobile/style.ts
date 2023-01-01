import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;

  > img {
    max-width: 120px;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
