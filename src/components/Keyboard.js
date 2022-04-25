import { StyledButton, EqualButton, FunctionButton } from "../components/styles/Buttons.styled"



const buttonValues = [
    7,8,9,"DEL",
    4,5,6,"+"
    ,1,2,3,"-",
    ".",0,"/","x",
    "RESET","=",
  ];

const handleClick = (e) => {
    console.log('clicked')
}
  
export  const buttons = buttonValues.map((btn, i) => {
    if (btn === "RESET" || btn === "DEL") {
        return (
            <FunctionButton 
                value={btn}
                key={i}
                handleClick={handleClick}
            ></FunctionButton>
        )
    } else if (btn === "=") {
            return (
                <EqualButton 
                    value={btn} 
                    key={i}
                    handleClick={handleClick}
                ></EqualButton>
            )
        } else {
            return (
                <StyledButton
                    value={btn}
                    key={i}
                    handleClick={handleClick}>
                </StyledButton>

            )
        }
  });