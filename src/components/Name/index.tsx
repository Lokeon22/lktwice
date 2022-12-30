import { Container } from "./style";
import { News } from "../News";
import { Fade } from "react-awesome-reveal";

interface DetailsBody {
  name: string;
  desc: string;
  img?: string;
}

export const Name = ({ name, desc, img }: DetailsBody) => {
  return (
    <Container>
      <div>
        <label />
        <h2>{name}</h2>
        <p>{desc}</p>
        <img src={img} alt="" />
        <span>Release Date</span>
        <span>2015-11-22</span>
        <label />
        <p>
          While creating an overwhelming support and social phenomenon among a
          wide range of people, especially teenagers, they have also performed
          for three consecutive years since their debut year.
        </p>
      </div>
      <News />
    </Container>
  );
};
