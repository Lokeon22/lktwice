import { Container, About, FanNewsLatests, FanNew, FanLatest } from "./style";
import { Button } from "../Button";

import witlogo from "../../assets/icons/witlogo.png";
import wolf from "../../assets/images/wolf1.jpg";

export const Latest = () => {
  return (
    <Container>
      <About>
        <img src={witlogo} />
        <Button title="About Once" />
      </About>
      <FanNewsLatests>
        <FanNew>
          <h2>
            FanClub <br></br>News
          </h2>
          <div>
            <p>News</p>
            <span>2022.12.28</span>
          </div>
          <h2>Celebrate Twice Once Day Stage Version</h2>
        </FanNew>
        <FanLatest>
          <h2>Latest</h2>
          <div className="content">
            <img src={wolf} />
            <div>
              <span>movie</span>
              <label>2023.01.01</label>
              <p>New!</p>
            </div>
            <h1>Happy new year</h1>
          </div>
        </FanLatest>
      </FanNewsLatests>
    </Container>
  );
};
