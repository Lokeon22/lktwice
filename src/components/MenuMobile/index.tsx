import { useEffect } from "react";
import { MobileClose, MobileOpen, SocialMobile } from "./style";

import logo from "../../assets/icons/witcherlogo.png";
import menu from "../../assets/icons/icon.svg";
import close from "../../assets/icons/close.svg";

import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";

interface isVisibleProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuMobileScroll: boolean;
}

export const MenuMobile = ({
  isVisible,
  setIsVisible,
  menuMobileScroll,
}: isVisibleProps) => {
  return (
    <MobileClose
      style={{ backgroundColor: menuMobileScroll ? "black" : "transparent" }}
    >
      <img src={logo} />
      <img src={menu} onClick={() => setIsVisible(true)} />
      <MobileOpen
        style={{
          display: isVisible ? "flex" : "none",
        }}
      >
        <ul>
          <img src={close} onClick={() => setIsVisible(false)} />
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">News</a>
          <a href="#">Discography</a>
          <a href="#">Special</a>
          <a href="#">FanClub</a>
        </ul>
        <SocialMobile>
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
        </SocialMobile>
      </MobileOpen>
    </MobileClose>
  );
};
