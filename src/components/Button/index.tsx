import { Container } from "./style";

interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <Container>
      <a href="#" className="button item1">
        {title}
      </a>
    </Container>
  );
};
