import { useState } from "react"

import {GlobalStyles}from "./index"
import styled from "styled-components"

//import { GlobalStyles } from "./styles/GlobalStyles"

function App() {

  return (

    <Container>
      <GlobalStyles/>
      <section className="contentSidebar"></section>
      <section className="contentMenuambur"></section>
      <section className="contentRouters"></section>

    </Container>
  )
}
const Container=styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;

`

export default App;
