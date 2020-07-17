import React from "react"

// import { ThemeProvider } from "styled-components"
// import defaultTheme from "../src/styles/themes/default"

import { StateProvider } from "../src/context/StateContext"


export function wrapRootElement({ element }) {
  return (
    <StateProvider>{element}</StateProvider>
  )
}
