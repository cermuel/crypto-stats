import React from "react";
import UsestatePT from "./Components/useStatePedroTech";
import PropsPT from "./Components/propsPedroTech";
import Loginform from "./Components/loginform";
import TernaryOps from "./Components/ternaryOperators";
import UseREF from "./Components/useRefPedroTech";
import UseEFFECT from "./Components/useEffectPedroTech";
import TodoList from "./Components/TodoList";
import ReactFormsPedroTech from "./Components/ReactFormsPedroTech";
import { Button } from "./Components/Button.style";
import { LinkButton } from "./Components/Button.style";
import { AppContainer } from "./Container.style";
import { GlobalStyle } from "./GlobalStyles.style";
import Hero from "./Components/Hero";
import ReactRouter from "./Components/ReactRouter";
import CryptoCurrency from "./Components/CryptoCurrency";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      {/* <AppContainer>
        <GlobalStyle /> */}
      {/* <UsestatePT />
      <hr />
      <PropsPT
        firstname={"Samuel"}
        lastname={"Ngene"}
        email={"samuelobasi2005@gmail.com"}
      />
      <PropsPT
        firstname={"Daniel"}
        lastname={"Olusegun"}
        email={"daniel.olusegun@lmu.edu.ng"}
      /> */}
      {/* <Loginform /> */}
      {/* <TernaryOps /> */}
      {/* <UseREF /> */}
      {/* <UseEFFECT /> */}
      {/* <TodoList /> */}
      {/* <ReactFormsPedroTech /> */}
      {/* <Hero />
        <Button background="skyblue" large={true}>
          <LinkButton href="https://www.instagram.com/cermuel">
            Follow me
          </LinkButton>
        </Button> */}
      {/* <ReactRouter /> */}
      <CryptoCurrency />
      {/* </AppContainer> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
