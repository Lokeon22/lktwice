import { Container, Content, SubContent } from "./style";

import { Header } from "../../components/Header";

export const Profile = () => {
  return (
    <Container>
      <Header />
      <Content>
        <h2>Profile</h2>
        <SubContent>
          <ul>
            <li>TESTE</li>
            <li>TESTE</li>
            <li>TESTE</li>
            <li>TESTE</li>
            <li>TESTE</li>
            <li>TESTE</li>
          </ul>
        </SubContent>
      </Content>
    </Container>
  );
};
