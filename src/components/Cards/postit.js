import styled from "styled-components";

const StyledPost = styled.div `
    background-color: #FFE814;
    margin-bottom: 10px;
    padding: 10px;
`
const Delete = styled.div `
    cursor: pointer;
    float: right;
`
const P = styled.p `
    font-weight: 200;
    font-size: 12px;
    margin-top: 20px;
`

function Postit () {
    return (
        <StyledPost>
            <Delete>X</Delete>
            <P>Frase do Post</P>
        </StyledPost>
    )
}

export default Postit