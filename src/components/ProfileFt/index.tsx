import { Container } from "./style";

interface profileProps {
  id: number;
  title: string;
  foto: string;
}

export const ProfileFt = ({ id, title, foto }: profileProps) => {
  return (
    <Container>
      <img src={foto} alt="" />
    </Container>
  );
};
