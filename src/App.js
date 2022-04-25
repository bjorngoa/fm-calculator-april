
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { buttons } from "./components/Keyboard"
import GlobalStyles from "./components/styles/Global";
import { defaultTheme, lightTheme, invertedTheme } from "./components/Themes/themes"
import { ContainerKeybaordWrapper } from "./components/styles/KeyboardWrapper.styled";
import { StyledInputDisplay } from "./components/styles/InputDisplay.styled";
import { InputRange } from "./components/styles/InputRange.styled";
import { HeaderContainer } from "./components/HeaderContainer";
import { HeaderContainerStyled } from "./components/styles/HeaderContainer.styled";
import { InputRangeSelectorContainer } from "./components/styles/InputRangeSelectorContainer";
import { HeaderSelection } from "./components/HeaderSelction";




function App() {
  const [theme, setTheme] = useState({ value: "1" })

  const changeTheme = (e) => {
    const { value } = e.target
    setTheme((prevTheme) => {
      return { ...prevTheme, value }
    })
  }


  return (
    <ThemeProvider theme={theme.value === "1" ? defaultTheme : theme.value === "2" ? lightTheme : invertedTheme} >
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
        
        <StyledInputDisplay />
        <ContainerKeybaordWrapper>
          {buttons}
        </ContainerKeybaordWrapper>      
    </ThemeProvider>
  );
}

export default App;
