import React, { createContext, useState } from "react";


type SearchResult = {
  id: string;
  poster_path: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: string;
  genres: []
}

type SearchInfoPage = {
  total_pages: string;
  page: string;
  search: string;
}

interface ContextProps {
  resultSearch: SearchResult[];
  setResultSearch: Function;
  resultInfo: SearchInfoPage;
  setResultInfo: Function;
}

const SearchContext = createContext<ContextProps>({
  resultSearch: [],
  setResultSearch: () => null,
  resultInfo: {total_pages: "", page: "", search: ""},
  setResultInfo: () => null,
});

interface Props {
  children: any;
}

const SearchContextProvider: React.ComponentType<Props> = props => {
  const [resultInfo, setResultInfo] = useState<SearchInfoPage>({total_pages: "", page: "", search: ""})
  const [resultSearch, setResultSearch] = useState<SearchResult[]>([])

  return (
      <SearchContext.Provider value={{ 
        resultSearch, 
        setResultSearch, resultInfo, setResultInfo,  }}>
          {props.children}
      </SearchContext.Provider>
  );
};


export { SearchContextProvider };
export default SearchContext;
