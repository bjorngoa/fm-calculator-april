import styled from "styled-components"

export const InputRangeSelectorContainer = styled.div`
    display: flex;
    color: ${(props) => props.theme.headerColor};
    justify-content: right;
    margin: 0 auto;
    width: 300px;


    p {
        margin-right: 12px;
    }

    @media (min-width: 810px) {
        width: 500px;
    }
`