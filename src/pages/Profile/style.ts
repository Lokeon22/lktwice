import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  color: white;
`;

export const Content = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubContent = styled.div`
  position: relative;
  max-width: 250px;
  margin-top: 50px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    list-style: none;
  }
`;
