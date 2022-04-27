import React from "react"

import { StoreProvider } from "./src/context/store-context"
import { HoverProvider } from "./src/providers/hoverProvider"

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <HoverProvider>{element}</HoverProvider>
    </StoreProvider>
  )
}
