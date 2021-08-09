import styled from "styled-components";

const StyledBoardCards = styled.div `
    min-width: 310px;
    min-height: 80px;
    background-color: ${({theme})=> theme.colors.white};
    padding: 10px 15px;
    border-left: 10px solid ${({theme})=> theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;

    :hover: {
        background-color: ${({theme})=> theme.colors.grey};
    }
`

const H4 = styled.h4 `
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 0;
`

const P = styled.p `
    font-weight: 300;
    font-size: 12px;
    line-height: 0;
`

function BoardName () {
    return (
        <StyledBoardCards>
            <H4>Card Name</H4>
            <P>Atualizado em 01 de janeiro de 2022</P>
        </StyledBoardCards>
    )
}

export default BoardName