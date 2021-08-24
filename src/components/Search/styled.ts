import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
`

export const Input = styled.input`
    background-color: #ebebeb;
    border: none;
    border-radius: 20px;
    height: 50px;
    width: 700px;
    padding: 0px 20px;

    &:focus {
        outline: none;
    }
`;