import React from "react"
import useHovered from "../providers/hoverProvider"

function HoverableComponent(Component) {
  const WrappedComponent = props => {
    const { setHovered } = useHovered()

    return (
      <Component
        {...props}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
      />
    )
  }
  return WrappedComponent
}

export default HoverableComponent
