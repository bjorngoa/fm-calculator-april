import styled from "styled-components"
import Button from "../Buttons/Button"



export const StyledButton = styled(Button)`
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;


    background-color: ${props => props.theme.keyBackgroundThird};
    color: ${props => props.theme.keyTextColor};
    box-shadow: 0 5px ${props => props.theme.keyShadow};


&:hover {
    
    transform: scale(.95)
}
`

export const FunctionButton = styled(StyledButton)`
    font-size: 1.25rem;
    color: #fff;
    font-weight: 700;

    background-color: ${props => props.theme.keyBackground};

    

    &:nth-last-of-type(2) {
        grid-column: 1 / span 2;
    }
    
`

export const EqualButton = styled(StyledButton)`
    
    background-color: ${props => props.theme.keyBackgroundSecond};
    box-shadow: 0 5px ${props => props.theme.keyShadowSecond};
    color:  ${props => props.theme.secondColor}; 
    
    
    font-size: 1.25rem;
    grid-column: 3 / span 2;
`


