import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

import { MenuMobile } from "../MenuMobile";
import { logo, youtube, facebook, instagram, elips } from "../../data/Imports";

export const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [menuMobileScroll, setMenuMobileScroll] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    function menuScrollPosition() {
      window.scrollY > 150
        ? setMenuMobileScroll(true)
        : setMenuMobileScroll(false);
    }
    window.addEventListener("scroll", menuScrollPosition);

    return () => {
      window.removeEventListener("scroll", menuScrollPosition);
    };
  }, []);

  return (
    <Container>
      <nav
        style={{ backgroundColor: menuMobileScroll ? "black" : "transparent" }}
      >
        <Link to="/" style={{ color: "pink" }}>
          Home
        </Link>
        <Link to={"/profile"}>Profile</Link>
        <a href="#">News</a>
        <a href="#">Shop</a>
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
      <MenuMobile
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        menuMobileScroll={menuMobileScroll}
      />
    </Container>
  );
};
