import { useContext } from "react";
import { Search } from "../../components";
import Pagination from "../../components/Pagination";
import SearchContext from "../../providers/searchProvider";
import Card from "./components/Card";

import * as S from "./styled";

const Home = () => {

  const {resultSearch} = useContext(SearchContext)

  return (
    <S.Container>
      <Search />
      <S.Content>
      {resultSearch.map((res) => (
        <Card
          key={res.id}
          id={res.id}
          imgSrc={res.poster_path}
          title={res.original_title}
          description={res.overview}
          release_date={res.release_date}
          vote_average={res.vote_average}
          genres={res.genres}
        />
      ))}
      <Pagination/>
      </S.Content>
    </S.Container>
  );
};

export default Home;
