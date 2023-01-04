import { Container, About, FanNewsLatests, FanNew, FanLatest } from "./style";
import { Button } from "../Button";

interface fotosProps {
  fotos?: string[];
  logoURL: string;
  notices: string[];
  text?: string[];
}

export const Latest = ({ fotos, logoURL, notices, text }: fotosProps) => {
  return (
    <Container>
      <About>
        <img src={logoURL} />
        <Button title="About Once" />
      </About>
      <FanNewsLatests>
        <FanNew>
          <h2>
            FanClub <br></br>News
          </h2>
          {notices.map((notice) => {
            return (
              <div key={notice} className="subcontent">
                <div>
                  <p>News</p>
                  <span>2023.01.01</span>
                </div>
                <h1>{notice}</h1>
              </div>
            );
          })}
        </FanNew>
        <FanLatest>
          <h2>Latest</h2>
          <div className="container">
            {fotos?.map((foto, index) => {
              return (
                <div key={index} className="contentimg">
                  <img src={foto} />
                </div>
              );
            })}
            {text?.map((texto, index) => {
              return (
                <div key={index} className="contenttext">
                  <div>
                    <p>photo</p>
                    <a href="#" target="_blank">
                      New!
                    </a>
                  </div>
                  <h1>{texto}</h1>
                </div>
              );
            })}
          </div>
        </FanLatest>
      </FanNewsLatests>
    </Container>
  );
};
