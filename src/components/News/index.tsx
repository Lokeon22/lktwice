import { Container, NewsContent } from "./style";

interface Noticias {
  news?: string[];
}

export const News = ({ news }: Noticias) => {
  return (
    <Container>
      <h2>WHAT'S NEW</h2>
      {news &&
        news.map((noticia, index) => {
          return (
            <NewsContent key={index}>
              <div>
                <h1>NEWS</h1>
                <span>2022.12.22</span>
              </div>
              <a href="#">{noticia}</a>
            </NewsContent>
          );
        })}
    </Container>
  );
};
