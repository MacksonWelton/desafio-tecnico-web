import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import * as S from "./styled";

const MovieDetail = () => {
  let { id }: any = useParams();
  const [data, setData] = useState<any>({});
  const [trailers, setTrailers] = useState<any[]>([]);

  console.log(trailers);

  useEffect(() => {
    if (id) {
      api
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=55fad872502538a8a0345c62dfa18933&language=pt-BR`
        )
        .then((res) => {
          if (res.data) {
            setData(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=55fad872502538a8a0345c62dfa18933&language=pt-BR`
        )
        .then((res) => {
          if (res.data) {
            setTrailers(res.data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  console.log(data);

  return (
    <S.Container>
      <S.ContentTitle>
        <S.Title>{data.original_title}</S.Title>
        <S.Date>{moment(data.release_date).format("DD/MM/YYYY")}</S.Date>
      </S.ContentTitle>
      <S.Content>
        <S.ContentInfo>
          <S.TitleInfo>Sinopse</S.TitleInfo>
          <S.Sinopse>{data.overview}</S.Sinopse>
          <S.TitleInfo>Informações</S.TitleInfo>
          <S.InfoMovieList>
            <S.InfoMovieItem>
              <h3>Situação</h3>
              <p>{data.status}</p>
            </S.InfoMovieItem>
            <S.InfoMovieItem>
              <h3>Idioma</h3>
              <p>{data.original_language}</p>
            </S.InfoMovieItem>
            <S.InfoMovieItem>
              <h3>Duração</h3>
              <p>{(data.runtime / 60).toFixed(2).replace(".", "h")}min</p>
            </S.InfoMovieItem>
            <S.InfoMovieItem>
              <h3>Orçamento</h3>
              <p>
                {Number(data.budget).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </S.InfoMovieItem>
            <S.InfoMovieItem>
              <h3>Receita</h3>
              <p>
                {Number(data.revenue).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </S.InfoMovieItem>
            <S.InfoMovieItem>
              <h3>Lucro</h3>
              <p>
                {(Number(data.revenue) - Number(data.budget)).toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
              </p>
            </S.InfoMovieItem>
          </S.InfoMovieList>
          <S.ContentInfoFooter>
            <S.GenreList>
              {data.genres &&
                data.genres.map((item: any) => (
                  <S.GenreItem key={item.id}>{item.name}</S.GenreItem>
                ))}
            </S.GenreList>
            <S.Circle>70%</S.Circle>
          </S.ContentInfoFooter>
        </S.ContentInfo>
        <S.ContentImage>
          <S.Img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
        </S.ContentImage>
      </S.Content>
      <S.ContentTrailers>
        {trailers.map((video) => (
          <iframe key={video.key} width="100%" height="700" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        ))}
      </S.ContentTrailers>
    </S.Container>
  );
};

export default MovieDetail;
