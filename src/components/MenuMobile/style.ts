import styled from "styled-components";

export const MobileClose = styled.div`
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

export const MobileOpen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: rgb(254, 140, 158);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    gap: 22px;

    > img {
      position: absolute;
      top: 48px;
      right: 30px;
    }

    a {
      font-size: 1.125rem;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

export const SocialMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;
