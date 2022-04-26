/* import { StyledButton, EqualButton, FunctionButton } from "../components/styles/Buttons.styled" */



export const buttonValues = [
    7,8,9,"DEL",
    4,5,6,"+"
    ,1,2,3,"-",
    ".",0,"/","x",
    "RESET","=",
  ];

 /* const handleClick = (e) => {
    console.log('clicked')
    alert("red")
}
  
export  const buttons = buttonValues.map((btn, i) => {
    if (btn === "RESET" || btn === "DEL") {
        return (
            <FunctionButton 
                value={btn}
                key={i}
                
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
  }); */