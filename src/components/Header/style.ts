import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;

    > div {
      z-index: 1;
    }
  }

  .secondcontent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 1;

    img {
      cursor: pointer;
    }
  }

  nav {
    display: flex;
    gap: 20px;

    img {
      width: 18px;
      height: 18px;
    }
  }
`;
