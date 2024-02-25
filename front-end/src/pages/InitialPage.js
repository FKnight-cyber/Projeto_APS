import styled from "styled-components";

export default function InitialPage(){
    return(
        // eslint-disable-next-line react/jsx-no-undef
        <InitialPageContainer>
            <h1>Página inicial</h1>
        </InitialPageContainer>
    )
};

const InitialPageContainer = styled.div`
padding: 20px;
 h1{
    color: black;
 }
`