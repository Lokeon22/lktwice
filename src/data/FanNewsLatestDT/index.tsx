import {
  witlogo,
  cyberlogo,
  wolf1,
  wolf2,
  wolf3,
  girlcyber,
  girl2cyber,
  girl3cyber,
} from "../Imports";

export const dataContent = [
  {
    id: 1,
    title: "news",
    subtitle: "new!",
    notices: [
      "CELEBRATE TWICE ONCE DAY STAGE VERSION",
      "2023 LDF FAMILY PREMIER with TWICE",
    ],
    fotos: {
      fotoURL: [wolf1, wolf2, wolf3],
      text: [
        "HAPPY NEW YEAR 2023",
        "This Is My Story, Not Yours!",
        "Wind's Howling - Geralt",
      ],
    },
    logoURL: witlogo,
  },
  {
    id: 2,
    title: "news",
    subtitle: "new!",
    notices: [
      "V, V, V... The city of dreams",
      "Actually, I wasn't gonna pay you at all",
    ],
    fotos: {
      fotoURL: [girlcyber, girl2cyber, girl3cyber],
      text: [
        "Is That Really About Hacking?",
        "How We Used To Say Goodbye!",
        "I Was Here - V",
      ],
    },
    logoURL: cyberlogo,
  },
];
