import styled from "styled-components"

export const InputRange = styled.input`
        -webkit-appearance: none;
        height: 2em;
        width: 5em;
        background-color: ${(props) => props.theme.toggleKeypadBackground};
        border-radius: 50px;
        padding-right: 5px;
        padding-left: 5px;
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 10px;


&::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.keyBackgroundSecond};
    cursor: pointer;
    &:hover {
        filter: brightness(1.2);
    }
}
`


