import { useState, useEffect, useRef } from "react";
import { slides, wallpapersAbout } from "../../data";

import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { Name } from "../../components/Name";
import { Aboutft } from "../../components/Aboutft";
import { Latest } from "../../components/Latest";
import { Footer } from "../../components/Footer";

import { Container, Overlay } from "./style";

export const Home = () => {
  const [active, setActive] = useState<number>(0);
  const [position, setPostion] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [menuMobileScroll, setMenuMobileScroll] = useState(false);
  const contentRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    function menuScrollPosition() {
      window.scrollY > 150
        ? setMenuMobileScroll(true)
        : setMenuMobileScroll(false);
    }
    window.addEventListener("scroll", menuScrollPosition);

    return () => {
      window.removeEventListener("scroll", menuScrollPosition);
    };
  }, []);

  return (
    <>
      <Container>
        <Header
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          menuMobileScroll={menuMobileScroll}
        />
        <section className="container">
          <div
            ref={contentRef}
            className="content"
            style={{ transform: `translateX(${position}px)` }}
          >
            {slides.map(({ id, bg }) => {
              return (
                <video key={id} src={bg} autoPlay loop muted className="item" />
              );
            })}
          </div>
          <Overlay />
          <Carousel
            slideNext={slideNext}
            slidePrev={slidePrev}
            active={active}
          />
          <div
            className="content"
            style={{ transform: `translateX(${position}px)` }}
          >
            {slides.map(({ id, name, desc, img, news }) => {
              return (
                <Name
                  key={id}
                  name={name}
                  desc={desc}
                  img={img}
                  news={news?.newsrelate}
                />
              );
            })}
          </div>
        </section>
        <Aboutft />
        <Latest />
        <Footer />
      </Container>
    </>
  );
};
