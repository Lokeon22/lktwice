import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
    padding: 20px 0px;
    transition: all ease 0.3s;

    img {
      width: 120px;
    }

    a {
      color: white;
      :hover {
        color: #ccc;
        transition: all ease 0.3s;
      }
    }

    div {
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      ul {
        position: fixed;
        list-style: none;
        gap: 10px;
        margin-top: 45px;

        img {
          width: 16px;
          :hover {
            animation: rotation 0.7s linear;
          }
        }
      }

      @keyframes rotation {
        from {
          transform: rotateY(0deg);
        }

        to {
          transform: rotateY(360deg);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;
