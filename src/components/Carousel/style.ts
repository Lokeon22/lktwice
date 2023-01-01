import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  left: 0;
  top: 50%;
  position: absolute;

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

    span {
      font-size: 1.2rem;
      opacity: 0.9;
      cursor: pointer;

      strong {
        font-weight: 400;
        font-size: 1.5rem;
      }
    }

    svg {
      cursor: pointer;
      :hover {
        color: rgba(113, 203, 250, 0.8);
        transition: all ease 0.3s;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .content {
      padding: 0px 10px;
    }
  }

  @media screen and (max-width: 768px) {
    top: 90%;
  }
`;
