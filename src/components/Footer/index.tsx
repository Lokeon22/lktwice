import {
  Container,
  SubContainer,
  Content,
  Links,
  Botoes,
  Foot,
  LinksMobile,
} from "./style";

import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";

export const Footer = () => {
  return (
    <>
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
            <h2>Link</h2>
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
          <LinksMobile>
            <h2>Link</h2>
            <ul>
              <a href="#">
                <img src={instagram} />
              </a>
              <a href="#">
                <img src={youtube} />
              </a>
              <a href="#">
                <img src={facebook} />
              </a>
              <a href="#">
                <img src={youtube} />
              </a>
              <a href="#">
                <img src={instagram} />
              </a>
            </ul>
          </LinksMobile>
          <Botoes>
            <button>Twice Official FanClub Once</button>
            <button>Twice Official FanClub Once</button>
          </Botoes>
        </SubContainer>
      </Container>
      <Foot>
        <span>
          Copyright <strong>© LK ENTERTAINMENT</strong>, Ltd. All rights
          reserved.
        </span>
      </Foot>
    </>
  );
};
