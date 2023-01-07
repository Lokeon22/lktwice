import { Container, Content } from "./style";

import { Header } from "../../components/Header";
import { ProfileFt } from "../../components/ProfileFt";
import { profiles } from "../../data/Profiles";

export const Profile = () => {
  return (
    <Container>
      <Header />
      <Content>
        {profiles &&
          profiles.map(({ id, title, foto }) => {
            return <ProfileFt key={id} id={id} title={title} foto={foto} />;
          })}
      </Content>
    </Container>
  );
};
