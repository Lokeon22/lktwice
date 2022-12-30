import { Container, NewsContent } from "./style";

export const News = () => {
  return (
    <Container>
      <h2>WHAT'S NEW</h2>
      <NewsContent>
        <div>
          <h1>NEWS</h1>
          <span>2022.12.22</span>
        </div>
        <a href="#">
          ※Please note that the maintenance schedule is subject to change. We
          apologize for any inconvenience.
        </a>
      </NewsContent>
    </Container>
  );
};
