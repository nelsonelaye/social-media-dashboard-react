import React, { useState} from "react"
import Parent from "./Components/Parent/Parent"
import {ThemeProvider} from "styled-components"
import { set } from "express/lib/application"

const lightTheme = {
  pageBaground: "#fff",
  cardColor: "#F0F3FA",
  topBox: "#F8F9FE",
  whiteText: "#1D2029",
  greyText:"#7E8290"
}

const darkTheme = {
  pageBaground: "#1D2029",
  cardColor: "#252B43",
  topBox: "#20222F",
  whiteText: "#fff",
  greyText:"#7E8290"
}

const themes = {
  light:lightTheme,
  dark: darkTheme
}

function App() {
  const [myTheme, setMyTheme] = useState("light")
  return (
    <div className="App">
      <ThemeProvider theme={themes[myTheme]}> 
        <Parent myTheme={myTheme} setMyTheme={setMyTheme}  />
      </ThemeProvider>
    </div>
  );
}

export default App;
