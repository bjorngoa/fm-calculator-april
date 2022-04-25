import styled from 'styled-components'

export const ContainerKeybaordWrapper = styled.div`
  background-color: ${(props) => props.theme.toggleKeypadBackground};
  border-radius: 10px;
  padding: 2em;
  display: grid;
  place-content: center;
  gap: 1em;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(5, 60px);
  width: 325px;
  margin: 0 auto;

  @media (min-width: 810px) {
    grid-template-columns: repeat(4, 100px);
    gap: 1.5em;
    width: 500px;
  }
`
