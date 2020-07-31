import { useState, useEffect, useRef } from "react"

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const isMountedComponent = useRef(true)

  const updateMousePosition = ev => {
    setTimeout(() => {
      if (isMountedComponent.current) {
        setMousePosition({ x: ev.clientX, y: ev.clientY })
      }
    }, 100)
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      isMountedComponent.current = false
    }
  }, [])

  return mousePosition
}

export default useMousePosition
