import React from "react"
import { Global, css } from "@emotion/core"
import Header from "../components/header"
import Footer from "../components/footer"
import CursorFollower from "../components/cursorFollower"
import useMousePosition from "../utils/useMousePosition"
import "typeface-roboto"
import "normalize.css"
import "../components/layout.scss"
import { HoverProvider } from "../providers/hoverProvider"

const Layout = ({ children }) => {
  const { x, y } = useMousePosition()

  return (
    <HoverProvider>
      <Global
        styles={css`
          body {
            font-family: "Roboto", sans-serif;
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
// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
