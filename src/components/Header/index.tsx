import logo from "../../assets/icons/witcherlogo.png";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

import menu from "../../assets/icons/icon.svg";

import { Container } from "./style";

export const Header = () => {
  return (
    <Container>
      <section className="content">
        <div>
          <img
            src={logo}
            style={{ width: "120px", height: "60px", zIndex: 1 }}
          />
        </div>
        <div className="secondcontent">
          <nav>
            <a href="#" target="_blank">
              <img src={youtube} />
            </a>
            <a href="#" target="_blank">
              <img src={facebook} />
            </a>
            <a href="#" target="_blank">
              <img src={instagram} />
            </a>
          </nav>
          <img src={menu} />
        </div>
      </section>
    </Container>
  );
};
