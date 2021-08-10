import styled from "styled-components";

import Postit from "./postit";
import Button from '../Buttons/button'
import StyledButton from "../Buttons/button";

const StyledBoardColumn = styled.div `
    display: flex;
    flex-direction: column;
    width: 230px;
    min-height: 300px;
    background-color: #cfcfc4;
    border-top: 10px solid ${({ theme })=>theme.colors.primary};
    border-radius: 5px;
    padding: 0 20px;
`

const H4 = styled.h4 `
    font-wight: 250;
    font-size: 20px;
`
const BoardContent = styled.div `
    flex: 1;
`

function BoardColumn ({ title }) {
    return (
        <StyledBoardColumn>
            <H4>{ title }</H4>
            <BoardContent>
                <Postit />
                <Postit />
            </BoardContent>
            <Button fullwidth variant="outlined">Adicionar card</Button>
        </StyledBoardColumn>
    )
}

BoardColumn.defaultProps = {
    title: 'Title test'
}

export default BoardColumn