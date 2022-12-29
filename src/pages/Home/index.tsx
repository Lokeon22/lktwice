import { useState, useEffect, useRef } from "react";
import slides from "../../data"; //faltando as urls dos videos

import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";

import { Container, Overlay } from "./style";

export const Home = () => {
  const [active, setActive] = useState<number>(0);
  const [position, setPostion] = useState<number>(0);
  const contentRef = useRef<HTMLInputElement | null>(null);

  /* galeria funcionando, faltando apenas importar os videos
   {slides.map(({ id, bg }) => {
              return (
                <video key={id} src={bg} autoPlay loop muted className="item" />
     );
   })}*/

  useEffect(() => {
    if (!contentRef.current) return;
    const { width } = contentRef.current.getBoundingClientRect();
    setPostion(-(width * active));
  }, [active]);

  const slidePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const slideNext = () => {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <section className="container">
          <div
            ref={contentRef}
            className="content"
            style={{ transform: `translateX(${position}px)` }}
          >
            <iframe
              src="https://www.youtube.com/embed/Ec-O9cHDGqI?autoplay=1&mute=1"
              frameBorder="0"
              className="item"
            />
          </div>
          <Overlay />
          <Carousel
            slideNext={slideNext}
            slidePrev={slidePrev}
            active={active}
          />
        </section>
      </Container>
    </>
  );
};
