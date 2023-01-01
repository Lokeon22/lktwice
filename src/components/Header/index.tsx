import { useState } from "react";
import { Container } from "./style";

import { MenuMobile } from "../MenuMobile";

import logo from "../../assets/icons/witcherlogo.png";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import elips from "../../assets/icons/ellipsis.svg";

interface isVisibleProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ isVisible, setIsVisible }: isVisibleProps) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <nav>
        <a href="#" style={{ color: "pink" }}>
          Home
        </a>
        <a href="#">Profile</a>
        <a href="#">News</a>
        <img src={logo} />
        <a href="#">Discography</a>
        <a href="#">Special</a>
        <a href="#">FanClub</a>
        <div
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <img
            src={elips}
            style={{ width: "30px", cursor: "pointer", filter: "invert(90%)" }}
          />
          <ul style={{ display: active ? "flex" : "none" }}>
            <li>
              <a href="#">
                <img src={instagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <MenuMobile isVisible={isVisible} setIsVisible={setIsVisible} />
    </Container>
  );
};
