import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  left: 0;
  top: 50%;
  position: absolute;
  z-index: 1;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 80px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    span {
      font-size: 20px;
      opacity: 0.9;
      cursor: pointer;
    }

    svg {
      cursor: pointer;
    }
  }
`;
