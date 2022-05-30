import React, { useState } from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { colors } from "../utils/colors"
import useMenu from "../utils/useMenu"
import Headroom from "react-headroom"
import Logo from "../images/logo.inline.svg"
import Hamburger from "./hamburger"

const Header = () => {
  const { prismicMenu } = useMenu()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMegamenu, setShowMegamenu] = useState(false)
  const [timer, setTimer] = useState(null)
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <Headroom
      css={css`
        .headroom--pinned header {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
      `}
    >
      <header
        css={css`
          padding-top: 3rem;
          padding-bottom: 1.5rem;
          background-color: ${colors.lightgray};
          position: relative;
          z-index: 1200;
          .menu {
            .logo {
              width: 54px;
              height: auto;
              .complete-a {
                opacity: 0;
                transition: all 0.3s ease-in-out;
              }
              .dot {
                transition: all 0.3s ease-in-out;
              }
              &:hover {
                .complete-a {
                  opacity: 1;
                }
                .dot {
                  opacity: 0;
                }
              }
            }
            nav {
              margin-left: auto;
              position: fixed;
              width: 100%;
              height: 100vh;
              top: 0;
              left: 0;
              z-index: 1200;
              background-color: #fff;
              display: flex;
              justify-content: center;
              transform: translateX(-100%);
              transition: all 0.3s ease-in-out;
              font-size: 1.2rem;
              .mobile-wa {
                margin-bottom: 4rem;
                text-align: center;
              }
              &.is-opened {
                transform: translateX(0);
              }
              @media (min-width: 768px) {
                position: relative;
                width: auto;
                height: auto;
                transform: translateX(0);
                background-color: transparent;
                font-size: 1rem;
                .mobile-wa {
                  display: none;
                }
              }
            }
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              @media (min-width: 768px) {
                flex-direction: row;
              }
              li {
                margin-bottom: 2rem;
                &:first-of-type,
                &:last-of-type {
                  margin-top: auto;
                }
                @media (min-width: 768px) {
                  margin-left: 2.5rem;
                  margin-bottom: 0;
                }
                a {
                  display: block;
                  color: #000000;
                  position: relative;
                  letter-spacing: 0.1rem;
                  &:before,
                  &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    margin: auto;
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s ease-in-out;
                  }
                  &:after {
                    width: 100%;
                    height: 2px;
                    background-color: ${colors.lightgray};
                    bottom: 0;
                    top: 0;
                    left: 0;
                    right: 0;
                  }
                  &:before {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #000000;
                    top: 0;
                    bottom: 0;
                    left: -8px;
                  }
                  &:hover,
                  &.active {
                    &:before,
                    &:after {
                      opacity: 1;
                    }
                  }
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
            padding-bottom: 3rem;
            transform: translateY(95%);
            background: ${colors.lightgray};
            opacity: 0;
            transition: all 0.3s ease-in-out;
            pointer-events: none;
            box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.1);
            display: none;
            @media (min-width: 992px) {
              display: block;
            }
            &.show {
              opacity: 1;
              transform: translateY(100%);
              bottom: 1px;
              pointer-events: all;
            }
            &__item {
              margin: auto;
              display: none;
              @media (min-width: 768px) {
                max-width: 85%;
              }
              @media (min-width: 1200px) {
                max-width: 100%;
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
              <Logo className="logo" />
            </Link>
            <Hamburger menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
            <nav className={menuOpened ? "is-opened" : ""}>
              <ul>
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
                <li className="mobile-wa">
                  <a href="https://wa.me/+524426084124" target="_blank">
                    Teléfono: <br />
                    442 608 4124
                  </a>
                </li>
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
                  <h3>{item.titulo.text}</h3>
                  {item.content.text}
                  <div>
                    <a href="https://wa.me/+524426084124" target="_blank">
                      Teléfono: 442 608 4124
                    </a>
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
    </Headroom>
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
