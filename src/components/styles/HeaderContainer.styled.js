import styled from "styled-components";

export const HeaderContainerStyled = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin:  0 auto;
    align-items: center;
    
    
    
    color: ${(props) => props.theme.headerColor};
    

    @media (min-width: 810px) {
        width: 500px;
    }
`