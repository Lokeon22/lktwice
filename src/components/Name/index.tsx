import { useState } from "react";
import { Container } from "./style";

interface DetailsBody {
  name: string;
  desc: string;
}

export const Name = ({ name, desc }: DetailsBody) => {
  const [nomes, setNomes] = useState([]);

  return (
    <Container>
      <h2>{name}</h2>
      <span>{desc}</span>
    </Container>
  );
};
