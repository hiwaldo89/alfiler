import React, { useEffect } from "react"
import { Global, css } from "@emotion/react"
import Header from "../components/header"
import Footer from "../components/footer"
import CursorFollower from "../components/cursorFollower"
import useMousePosition from "../utils/useMousePosition"
import "typeface-roboto"
import "normalize.css"
import "../components/layout.scss"
import { HoverProvider } from "../providers/hoverProvider"
import { colors } from "../utils/colors"

const Layout = ({ children }) => {
  const { x, y } = useMousePosition()

  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "d0325150-d5cc-41c2-90f7-ce02b46ce253"

    function initCrisp() {
      var d = document
      var s = d.createElement("script")

      s.src = "https://client.crisp.chat/l.js"
      s.async = 1
      d.getElementsByTagName("head")[0].appendChild(s)
    }
    initCrisp()
  }, [])

  return (
    <HoverProvider>
      <Global
        styles={css`
          body {
            font-family: "Roboto", sans-serif;
            background-color: ${colors.lightgray};
            p {
              font-weight: 300;
            }
          }
        `}
      />
      <Header />
      <main>
        <CursorFollower coordinates={{ x, y }} />
        {children}
      </main>
      <Footer />
    </HoverProvider>
  )
}

export default Layout
