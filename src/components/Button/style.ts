import styled from "styled-components";

export const Container = styled.div`
  .button {
    width: 180px;
    position: relative;
    border: 1px solid white;
    padding: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 40px 0px;
    font-size: 14px;
    text-transform: uppercase;

    :hover {
      color: black;
      transition: all ease 0.2s;
    }
  }

  .button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    transition: all ease 0.4s;
    z-index: -1;
  }

  .item1::before {
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
  }

  .item1:hover::before {
    width: 100%;
  }
`;
