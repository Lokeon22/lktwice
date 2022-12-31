import { Container } from "./style";

interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return <Container>{title}</Container>;
};
