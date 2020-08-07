import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { colors } from "../utils/colors"
import Logo from "../images/logo.svg"
import useMenu from "../utils/useMenu"

const Header = () => {
  const { prismicMenu } = useMenu()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMegamenu, setShowMegamenu] = useState(false)
  const [timer, setTimer] = useState(null)

  return (
    <header
      css={css`
        padding-top: 3rem;
        padding-bottom: 1.5rem;
        background-color: ${colors.lightgray};
        position: relative;
        z-index: 1200;
        .menu {
          img {
            width: 54px;
            height: auto;
          }
          nav {
            margin-left: auto;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            li {
              margin-left: 2.5rem;
              a {
                display: block;
                color: #000000;
              }
            }
          }
        }
        .megamenu {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          transform: translateY(95%);
          background: ${colors.lightgray};
          opacity: 0;
          transition: all 0.3s ease-in-out;
          pointer-events: none;
          &.show {
            opacity: 1;
            transform: translateY(100%);
            pointer-events: all;
          }
          &__item {
            margin: auto;
            display: none;
            @media (min-width: 768px) {
              max-width: 85%;
            }
            &.visible {
              display: flex;
            }
            & > div {
              &:nth-of-type(1) {
                width: 45%;
                flex: 0 0 45%;
              }
              &:nth-of-type(2) {
                width: 40%;
                flex: 0 0 40%;
                margin-left: auto;
              }
            }
          }
        }
        .megamenu-content {
          line-height: 2;
          display: flex;
          flex-direction: column;
          & > div {
            margin-top: auto;
            a {
              color: inherit;
            }
          }
        }
      `}
    >
      <div className="menu">
        <div className="container d-flex items-center">
          <Link to="/">
            <img src={Logo} alt="Alfiler Branding Studio" />
          </Link>
          <nav>
            <ul className="d-flex">
              {prismicMenu.data.menu_item.map((item, index) => (
                <li
                  key={`menu-item-${prismicMenu.id}-${index}`}
                  onMouseEnter={() => {
                    clearTimeout(timer)
                    setShowMegamenu(true)
                    setCurrentIndex(index)
                  }}
                  onMouseLeave={() => {
                    setTimer(
                      setTimeout(function () {
                        setShowMegamenu(false)
                      }, 500)
                    )
                  }}
                >
                  {item.external ? (
                    <a href={item.link.text} target="_blank">
                      {item.titulo.text}
                    </a>
                  ) : (
                    <Link to={item.link.text} activeClassName="active">
                      {item.titulo.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`megamenu${showMegamenu ? " show" : ""}`}
        onMouseEnter={() => {
          clearTimeout(timer)
          setShowMegamenu(true)
        }}
        onMouseLeave={() => {
          setTimer(
            setTimeout(function () {
              setShowMegamenu(false)
            }, 500)
          )
        }}
      >
        <div className="container">
          {prismicMenu.data.menu_item.map((item, index) => (
            <div
              key={`megamenu-${prismicMenu.id}-${index}`}
              className={`megamenu__item${
                currentIndex === index ? " visible" : ""
              }`}
            >
              <div className="megamenu-content">
                {item.content.text}
                <div>
                  <a href="mailto:hola@alfilerstudio.com">
                    hola@alfilerstudio.com
                  </a>{" "}
                  <br />
                  <a href="tel:4424644699">442 464 46 99</a>
                </div>
              </div>
              <div>
                <Img fluid={item.image.fluid} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
