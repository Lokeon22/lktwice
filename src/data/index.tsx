import intoyu from "../assets/videos/intoyu.mp4";
import morningyu from "../assets/videos/morningyu.mp4";
import witcherwolf from "../assets/icons/witcherwolf.jpg";
// import videos because stream on mobile not autoplay

import witchertoussaint from "../assets/icons/wolftouss.jfif";
import cyberpunk from "../assets/images/cyberpunk.png";

export const slides = [
  {
    id: 1,
    bg: intoyu,
    name: "LKNZ",
    desc: "GET LK",
    img: witcherwolf,
    news: {
      newsrelate: [
        "※Please note that the maintenance schedule is subject to change. We apologize for any incovenience this may cause, and thank you for your understanding.",
        "Important Notice: Operating Company Name Change",
        "Notice regarding cancellation & ticket refunds",
      ],
    },
  },
  {
    id: 2,
    bg: morningyu,
    name: "EXEM2",
    desc: "TESTE 22",
  },
  { id: 3, bg: intoyu, name: "EXEM3", desc: "TESTE 33" },
  { id: 4, bg: morningyu, name: "EXEM4", desc: "POST 44" },
  { id: 5, bg: intoyu, name: "EXEM5", desc: "DELET 5" },
  { id: 6, bg: morningyu, name: "EXEM6", desc: "TESTE 6" },
];

export const dataFotosAbout = [
  { id: 1, bg: witchertoussaint },
  { id: 2, bg: cyberpunk },
  { id: 3, bg: witchertoussaint },
  { id: 4, bg: cyberpunk },
  { id: 5, bg: witchertoussaint },
  { id: 6, bg: cyberpunk },
];
