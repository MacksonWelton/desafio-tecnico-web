import styled from 'styled-components'


export const Container = styled.div `
    display: flex;
    width: 100%;
    background-color: #ebebeb;
    margin: 10px 0px;
`

export const Image = styled.img `
    width: 20%;
`;

export const Content = styled.div `
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const ContentTitle = styled.div `
    background-color: #196193;
    height: 80px;
    display: flex;
    align-items: flex-end;
`;

export const Title = styled.h1 `
    color: #45e8e4;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 30px;
    margin: 10px 20px;
`;

export const Date = styled.p`
    color: #828282;
    margin: 5px 0px 0px 80px;
`;

export const Description = styled.p `
    margin: 50px;
    color: #828282;
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
    font-family: 'Lato', sans-serif;
    color: #45e8e4;
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-bottom: -20px;
    background-color: #196193;
    border-radius: 100%;
    border: 2px solid #45e8e4;
    -webkit-box-shadow: 0px 0px 0px 3px #196193; 
    box-shadow: 0px 0px 0px 3px #196193;
`;
