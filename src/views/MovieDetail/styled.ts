import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ContentTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e6e6e6;
    padding: 5px 30px;
    font-family: 'Abel', sans-serif;
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #196193;
`;

export const Date = styled.span`
    color: #c2c2c2;
    font-size: 20px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f2f2f2;
    padding: 0px;
`;

export const ContentInfo = styled.div`
    width: 60%;
    margin: 0px 0px 0px 30px;
    padding: 10px 40px 0px 60px;
`;

export const TitleInfo = styled.h3`
    line-height: 2;
    font-family: 'Abel', sans-serif;
    font-size: 26px;
    color: #196193;
    border-bottom: 2px solid #45e8e4;
`;

export const Sinopse = styled.div`
    color: #9b9b9b;
    font-size: 22px;
    font-family: 'Lato', sans-serif;
`;

export const InfoMovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
`;

export const InfoMovieItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;

    h3 {
        color: #196193;
        text-align: center;
        font-size: 26px;
        font-family: 'Abel', sans-serif;
        margin: 0px;
    }

    p {
        margin: 0px;
        color: #9b9b9b;
        text-align: center;
        font-size: 18px;
        font-family: 'Lato', sans-serif;
    }
`;

export const ContentImage = styled.div`
    margin: 0px; 
    width: 30%;
`;

export const Img = styled.img`
    width: 100%;
`;

export const ContentInfoFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const GenreList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
`; 

export const GenreItem = styled.div`
    padding: 5px 25px;
    background-color: #fff;
    color: #196193;
    border: 2px solid #196193;
    border-radius: 100px;
    font-family: 'Abel', sans-serif;
    font-size: 22px;
`

export const Circle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-family: 'Lato', sans-serif;
    color: #45e8e4;
    width: 150px;
    height: 150px;
    background-color: #196193;
    margin-top: 60px;
    border-radius: 100%;
    border: 8px solid #45e8e4;
    -webkit-box-shadow: 0px 0px 0px 6px #196193; 
    box-shadow: 0px 0px 0px 6px #196193;
`;

export const ContentTrailers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
`;