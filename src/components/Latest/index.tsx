import { Container, About, FanNewsLatests, FanNew, FanLatest } from "./style";
import { Button } from "../Button";

import witlogo from "../../assets/icons/witlogo.png";

interface fotosProps {
  fotos?: string[];
}

export const Latest = ({ fotos }: fotosProps) => {
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
          <div className="subcontent">
            <div>
              <p>News</p>
              <span>2022.12.28</span>
              <a href="#" target="_blank">
                New!
              </a>
            </div>
            <h1>Celebrate Twice Once Day Stage Version</h1>
          </div>
        </FanNew>
        <FanLatest>
          <h2>Latest</h2>
          {fotos?.map((foto, index) => {
            return (
              <div key={index} className="content">
                <img src={foto} />
                <div>
                  <p>photo</p>
                  <span>2023.01.01</span>
                </div>
                <h1>Happy new year 2023</h1>
              </div>
            );
          })}
        </FanLatest>
      </FanNewsLatests>
    </Container>
  );
};
