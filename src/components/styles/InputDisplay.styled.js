import styled from 'styled-components'
import InputDisplay from '../InputDisplay/InputDisplay'

export const StyledInputDisplay = styled(InputDisplay)`
background-color: ${(props) => props.theme.toggleKeypadBackground};
color: ${(props) => props.theme.headerColor} ;
font-size: 2rem;
text-align: right;
border-radius: 10px;
margin: 0 auto;
width: 500px;
padding: 0.5em;
margin-bottom: 20px;
`