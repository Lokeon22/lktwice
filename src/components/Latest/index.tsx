import {
  Container,
  About,
  FanNewsLatests,
  FanNew,
  Title,
  SubComponent,
  ContainerFotoText,
  ContentImg,
  ContentText,
} from "./style";
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
          <Title>
            FanClub <br></br>News
          </Title>
          {notices.map((notice) => {
            return (
              <SubComponent key={notice}>
                <div>
                  <p>News</p>
                  <span>2023.01.01</span>
                </div>
                <h1>{notice}</h1>
              </SubComponent>
            );
          })}
        </FanNew>
        <FanNew>
          <Title>Latest</Title>
          <ContainerFotoText>
            {fotos?.map((foto, index) => {
              return (
                <ContentImg key={index}>
                  <img src={foto} />
                </ContentImg>
              );
            })}
            {text?.map((texto, index) => {
              return (
                <ContentText key={index}>
                  <div>
                    <p>photo</p>
                    <a href="#" target="_blank">
                      New!
                    </a>
                  </div>
                  <h1>{texto}</h1>
                </ContentText>
              );
            })}
          </ContainerFotoText>
        </FanNew>
      </FanNewsLatests>
    </Container>
  );
};
