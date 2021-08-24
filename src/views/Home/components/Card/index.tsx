import moment from "moment";
import { useHistory } from "react-router-dom";
import * as S from "./styled";

interface CardProps {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  release_date: string;
  vote_average: string;
  genres: []
}

const Card = (props: CardProps) => {
  const history = useHistory()

  return (
    <S.Container>
      <S.Image src={`https://image.tmdb.org/t/p/w500${props.imgSrc}`} />
      <S.Content>
        <S.ContentTitle>
          <S.Circle>{Number(props.vote_average) * 10}%</S.Circle>
          <S.Title onClick={() => history.push(`/detail/${props.id}`)}>{props.title}</S.Title>
        </S.ContentTitle>
        <S.Date>{moment(props.release_date).format('DD/MM/YYYY')}</S.Date>
        <S.Description>
          {props.description}
        </S.Description>
        <S.GenreList>
              {props.genres &&
                props.genres.map((item: any) => (
                  <S.GenreItem key={item.id}>{item.name}</S.GenreItem>
                ))}
            </S.GenreList>
      </S.Content>
    </S.Container>
  );
};

export default Card;
