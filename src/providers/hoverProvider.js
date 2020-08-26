import React, { createContext, useState, useContext } from "react"

const HoverContext = createContext({})

export const HoverProvider = ({ children }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <HoverContext.Provider value={{ hovered, setHovered }}>
      {children}
    </HoverContext.Provider>
  )
}

export default function useHovered() {
  const context = useContext(HoverContext)
  return context
}
