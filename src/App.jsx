import { useState } from "react"

import {GlobalStyles, MyRoutes, Sidebar}from "./index"
import styled from "styled-components"
import {Device} from "./styles/breakpoints"


//import { GlobalStyles } from "./styles/GlobalStyles"

function App() {

  return (

    <Container>
      <GlobalStyles/>
      <section className="contentSidebar"><Sidebar/></section>
      <section className="contentMenuambur">Menu Hambur</section>
      <section className="contentRouters"><MyRoutes/></section>

    </Container>
  )
}
//TOOD ESTO ES PARA CONTROLAR MODO MOBILE
const Container=styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
.contentSlidaber{
  display: none;
  background-color: rgba(78,45,78,0.5);
}
.contentMenuambur{
position: absolute;
background-color: rgba(53,219,11,0.5);
}
.contentRouters{
  background-color: rgba(231,13,136,0.5);
  grid-column: 1;
  width: 100%;
}

@media ${Device.tablet} {
  grid-template-columns:88px 1fr;
  .contentSlidaber{
    display: initial;
  }
  .contentMenuambur{
    display: none;
  }
  .contentRouters{
    grid-column:2;
  }

}


`

export default App;
