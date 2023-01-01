import { Fade } from "react-awesome-reveal";
import { Container } from "./style";
import { News } from "../News";
import { Button } from "../Button";

interface DetailsBody {
  name: string;
  desc: string;
  img?: string;
  news?: string[];
}

export const Name = ({ name, desc, img, news }: DetailsBody) => {
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
      <News news={news} />
      <Button title="View More" />
    </Container>
  );
};
