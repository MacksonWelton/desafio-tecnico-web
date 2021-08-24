import styled from 'styled-components'

export const Container = styled.section `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    gap: 10px;
    margin: 30px;
`;

export const Numbers = styled.div`
    color: #196193;
    cursor: pointer;
`;

export const Circle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    color: #45e8e4;
    width: 50px;
    height: 50px;
    background-color: #196193;
    border-radius: 100%;
    border: 2px solid #45e8e4;
    -webkit-box-shadow: 0px 0px 0px 3px #196193; 
    box-shadow: 0px 0px 0px 3px #196193;
`;
