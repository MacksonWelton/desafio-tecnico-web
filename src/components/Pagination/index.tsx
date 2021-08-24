import axios from "axios";
import { useContext, useState } from "react";
import SearchContext from "../../providers/searchProvider";
import * as S from "./styled";



const Pagination = () => {
  const { setResultSearch, setResultInfo, resultInfo } =
  useContext(SearchContext);

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageList, sePageList] = useState<number[]>([]);

  if (pageList.length === 0 && Number(resultInfo.total_pages) > 0) {
    sePageList(Array.from(Array(Number(resultInfo.total_pages)).keys()))
  }



  const handleChangePage = (page: number) => {
    setPageNumber(page)
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=55fad872502538a8a0345c62dfa18933&page=${page}&query=${resultInfo.search}`
      )
      .then((res) => {
        setResultSearch(res.data.results);
        setResultInfo({
          ...resultInfo,
          total_pages: res.data.total_pages,
          page: res.data.page,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <S.Container>
      {pageList.map((page, i) => {
        if (page === pageNumber) {
          return <S.Circle key={i}>{page}</S.Circle>;
        } else if (page > 0 && page <= 5 && page !== pageNumber) {
          return <S.Numbers onClick={() => handleChangePage(page)} key={i}>{page}</S.Numbers>;
        } else {
          return null;
        }
      })}
    </S.Container>
  );
};

export default Pagination;
