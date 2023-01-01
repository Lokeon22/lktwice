import { Container, SubContainer, Content, Links, Botoes } from "./style";

export const Footer = () => {
  return (
    <Container>
      <SubContainer>
        <Content>
          <h2>Content</h2>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Discography</a>
            </li>
            <li>
              <a href="#">Special</a>
            </li>
            <li>
              <a href="#">FanClub</a>
            </li>
          </ul>
        </Content>
        <Links>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </Links>
        <Botoes>
          <button>Twice Official FanClub Once</button>
          <button>Twice Official FanClub Once</button>
        </Botoes>
      </SubContainer>
    </Container>
  );
};
