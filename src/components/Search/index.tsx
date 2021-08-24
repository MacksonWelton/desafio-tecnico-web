import axios from "axios";
import { ChangeEvent, useContext, useState } from "react";
import SearchContext from "../../providers/searchProvider";
import * as S from "./styled";

const Search = () => {
  const [search, setSearch] = useState<string>();

  const { setResultSearch, setResultInfo, resultInfo } =
    useContext(SearchContext);

  const onSubmitSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=55fad872502538a8a0345c62dfa18933&query=${search}`
      )
      .then((res) => {
        setResultSearch(res.data.results);
        console.log(res.data.results)
        setResultInfo({
          ...resultInfo,
          total_pages: res.data.total_pages,
          page: res.data.page,
          search: search,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.Container onSubmit={onSubmitSearch}>
      <S.Input
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        type="text"
        name="search"
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </S.Container>
  );
};

export default Search;
