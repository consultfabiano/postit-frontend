import H1 from '../src/components/typography/h1'
import Container from '../src/components/layout/container'
import Infobar from '../src/components/InfoBar'
import Subtitle from '../src/components/typography/subtitle'
import BoardList from '../src/components/Board/boardList'

function Board () {
    return (
    <>
        <Infobar />
        <Container>
            <H1>Nome do quadro</H1>
            <Subtitle>Atualizado em janeiro de 2022</Subtitle>
            <BoardList />
        </Container>
    </>
    )
}

export default Board