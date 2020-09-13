import React from "react"
import { css } from "@emotion/core"

const Hamburger = ({ menuOpened, setMenuOpened }) => {
  return (
    <button
      className={`hamburger hamburger--emphatic${
        menuOpened ? " is-active" : ""
      }`}
      type="button"
      css={css`
        margin-left: auto;
        z-index: 1500;
        @media (min-width: 768px) {
          display: none;
        }
      `}
      onClick={() => setMenuOpened(prevState => !prevState)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

export default Hamburger
