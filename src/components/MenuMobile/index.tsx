import { useState } from "react";
import { Container } from "./style";

import logo from "../../assets/icons/witcherlogo.png";
import menu from "../../assets/icons/icon.svg";
import close from "../../assets/icons/close.svg";

export const MenuMobile = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Container>
        <img src={logo} />
        <img src={menu} />
      </Container>
    </>
  );
};
