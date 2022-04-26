
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { buttonValues } from "./components/Keyboard"
import GlobalStyles from "./components/styles/Global";
import { defaultTheme, lightTheme, invertedTheme } from "./components/Themes/themes"
import { ContainerKeybaordWrapper } from "./components/styles/KeyboardWrapper.styled";
import { StyledInputDisplay } from "./components/styles/InputDisplay.styled";
import { InputRange } from "./components/styles/InputRange.styled";
import { HeaderContainer } from "./components/HeaderContainer";
import { HeaderContainerStyled } from "./components/styles/HeaderContainer.styled";
import { InputRangeSelectorContainer } from "./components/styles/InputRangeSelectorContainer";
import { HeaderSelection } from "./components/HeaderSelction";
import { Container } from "./components/styles/Container.styled";
import { EqualButton, FunctionButton, StyledButton } from "./components/styles/Buttons.styled";




function App() {
  const [theme, setTheme] = useState({ value: "1" })


  
  

  const [inpD, setInpDP] = useState({
    number: 0,
    operator: '',
    result: 0,
  })


console.log(inpD)
  const changeTheme = (e) => {
    const { value } = e.target
    setTheme((prevTheme) => {
      return { ...prevTheme, value }
    })
  }


  const toLocaleString = (number) => 
  String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  
  const removeSpaces = (number) => number.toString().replace(/\s/g, '');

  const numbClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
      
    if (removeSpaces(inpD.number).length < 16) {
      setInpDP({
        ...inpD,
        number:
          inpD.number === 0 && value === '0'
          ? '0' 
          : removeSpaces(inpD.number) % 1 === 0
          ? toLocaleString(Number(removeSpaces(inpD.number + value)))
          : toLocaleString(inpD.number + value),
        result: !inpD.operator ? 0 : inpD.result,
      })
      
    }
  }

  



  const handleReset = () => {
    setInpDP((prevInpDPValue) => {
      return { ...prevInpDPValue, number: 0, operator: '', result: 0}
    })
  }

  const handleDelete = () => {
    
    setInpDP({
      ...inpD,
      operator: '',
      number: 0,
      result: 0,
    })
  }

const handleEqual = () => {
  console.log('=')
  if (inpD.operator && inpD.number) {
    const math = (a, b, sign) => 
    sign === '+'
    ? a + b
    : sign === '-'
    ? a - b
    : sign === 'x'
    ? a * b
    : a / b

    setInpDP({
      ...inpD,
      result:
        inpD.number === '0' && inpD.operator === '/'
        ? "Can't devide with 0"
        : toLocaleString(
          math(
            Number(removeSpaces(inpD.result)),
            Number(removeSpaces(inpD.number)),
            inpD.operator
          )
        ),
      operator: '',
      number: 0,
    })
  }
}

const opHandler = (e) => {
  e.preventDefault()
  const value = e.target.innerHTML

  setInpDP({
    ...inpD,
    operator: value,
    result:
      !inpD.result && inpD.number
      ? inpD.number
      : inpD.result,
    number: 0,
  })
}

const commaHandler = (e) => {
  e.preventDefault()
  console.log('.')
  const value = e.target.innerHTML


  setInpDP({
    ...inpD,
    number: !inpD.number.toString().includes('.')
    ? inpD.number + value
    :inpD.number,
  })
}



  const buttons = buttonValues.flat().map((btn, i) => {
    if (btn === 'RESET' || btn === 'DEL') {

      return (
        <FunctionButton
        value={btn}
        key={i}
        handleClick={btn === 'RESET' ? handleReset : handleDelete}
        ></FunctionButton>
      )
    } else if (btn === '=') {
      return (
       <EqualButton 
      value={btn}
      key={i}
      handleClick={handleEqual}></EqualButton>
      )
    } else {
      return ( <StyledButton
      value={btn}
      key={i}
      handleClick={btn === '/' || btn === '+' || btn === '-' || btn === 'x'
        ? opHandler
        : btn === '.'
        ? commaHandler
        : numbClickHandler
      }></StyledButton>
      )
    }
  }) 


  return (
    <ThemeProvider theme={theme.value === "1" ? defaultTheme : theme.value === "2" ? lightTheme : invertedTheme} >
        <Container>
        <GlobalStyles />
        <InputRangeSelectorContainer>
        <HeaderSelection>1</HeaderSelection>
        <HeaderSelection>2</HeaderSelection>
        <HeaderSelection>3</HeaderSelection>
        </InputRangeSelectorContainer>
        <HeaderContainerStyled><HeaderContainer />
        
        <label >THEME
        <InputRange min={1} max={3} type="range" value={theme.value} onChange={changeTheme}></InputRange>
        </label>
        </HeaderContainerStyled>
        
        <StyledInputDisplay value={inpD} />
        <ContainerKeybaordWrapper>
          {buttons}
        </ContainerKeybaordWrapper>
        </Container>      
    </ThemeProvider>
  );
}

export default App;
