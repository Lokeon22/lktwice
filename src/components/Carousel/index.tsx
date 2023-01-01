import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Container } from "./style";

interface BodyComponent {
  slideNext: React.MouseEventHandler<HTMLDivElement>;
  slidePrev: React.MouseEventHandler<HTMLDivElement>;
  active: number;
  isVisible: boolean;
}

export const Carousel = ({
  slideNext,
  slidePrev,
  active,
  isVisible,
}: BodyComponent) => {
  //active is the index from slide
  return (
    <Container style={{ zIndex: isVisible ? "0" : "1" }}>
      <div className="content">
        <div onClick={slidePrev}>
          <span>0{active + 1}/06</span>
          {<FiChevronLeft size={26} />}
        </div>
        <div onClick={slideNext}>
          <span>next</span>
          {<FiChevronRight size={26} />}
        </div>
      </div>
    </Container>
  );
};
