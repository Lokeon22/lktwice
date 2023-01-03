import { useState } from "react";
import { Container } from "./style";
import { Button } from "../Button";

interface bgProps {
  bg: string;
}

export const Aboutft = ({ bg }: bgProps) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <img src={bg} />
      <div>
        <h2>About Twice</h2>
        <p>
          TWICE" (read: "Twice"), a nine-member girl group from Asia, debuted in
          Japan on Wednesday, June 28, 2017 with the hashtag "#TWICE" (hashtag
          twice).<br></br> While creating an overwhelming support and social
          phenomenon among a wide range of people, especially teenagers, they
          have also performed at the Kohaku Uta Gassen for three consecutive
          years since their debut year. They have broken numerous records with
          their releases.
        </p>

        <p style={{ display: active ? "block" : "none" }}>
          In the spring of 2019, they will hold a dome tour, which has been a
          dream of theirs since their debut in Japan! They performed at Tokyo
          Dome in the fastest time since their debut in their home country,
          breaking the record for the fastest time ever for a foreign artist in
          Japan, and becoming the first girl group that debuted in Korea to hold
          a dome tour! TWICE will celebrate the 5th anniversary of their debut
          in Japan on Tuesday, June 28, 2022! As their Japan debut project, they
          will release TWICE 4th BEST ALBUM "#TWICE4" in March, TWICE DEBUT 5th
          Anniversary "T-W-I-C-E" as a commemorative DVD in May, and TWICE JAPAN
          4th ALBUM "Celebrate" in July. TWICE Japan 4th ALBUM "Celebrate" will
          be released in July. The fourth best album "#TWICE4" released on March
          16 (Wed.), the strongest album of the year, ranked No. 1 in Oricon
          Weekly Album Ranking for the first time, and tied for the second place
          among overseas artists in terms of the number of No. 1 albums of all
          time. It also became the single No. 1 album of all time among foreign
          fleet of female artists. It also ranked No. 1 in the Oricon Weekly
          Total Album Ranking. This was the sixth No. 1 album in total, and the
          record for the "total number of No. 1 albums in total" became the
          single largest in history. TWICE's fourth world tour, starting with a
          performance in Korea on December 25, 2021 (Saturday), will take place
          around the world, and the long-awaited Japan leg of the tour has been
          confirmed! TWICE 4TH WORLD TOUR 'III' IN JAPAN, their first Japan tour
          in almost 2 years, was held at Tokyo Dome on April 23 (Sat), 24 (Sun),
          and an emergency addition on 25 (Mon)!
        </p>
        <span onClick={() => setActive(!active)}>
          {active ? "- CLOSE" : "+ VIEW ALL"}
        </span>
        <Button title="Member Profile" />
      </div>
      <div className="teste"></div>
    </Container>
  );
};
