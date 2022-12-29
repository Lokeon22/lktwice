import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  .container {
    overflow: hidden;
  }

  .content {
    display: flex;
    transition: transform 0.3s ease;
  }

  .item {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
