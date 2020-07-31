import React from "react"
import { css } from "@emotion/core"
import { colors } from "../utils/colors"

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: ${colors.lightgray};
        padding-top: 72px;
        padding-bottom: 70px;
        .inline-block {
          display: inline-block;
        }
        .text-center {
          text-align: center;
        }
        .text-left {
          text-align: left;
        }
        .d-flex {
          & > div {
            width: 33.3333333%;
            flex: 0 0 33.333333%;
            h4 {
              margin-top: 0;
              margin-bottom: 50px;
            }
            a {
              display: inline-block;
              color: inherit;
              font-weight: 300;
              margin-bottom: 1rem;
              &:nth-of-type(1) {
                margin-top: 4.3rem;
              }
            }
          }
        }
      `}
    >
      <div className="container d-flex">
        <div>
          <h4>Alfiler Branding Studio</h4>
          <p>Senda Del Carruaje 102 Int. F </p>
          <p>Milenio III.</p>
          <p>Querétaro, Qro.</p>
        </div>
        <div className="text-center">
          <div className="text-left inline-block">
            <a href="tel:4424644699">442 464 4699</a> <br />
            <a href="mailto:contacto@alfilerstudio.com">
              contacto@alfilerstudio.com
            </a>
          </div>
        </div>
        <div className="text-center">
          <div className="text-left inline-block">
            <a href="https://www.facebook.com/AlfilerStudio" target="_blank">
              Facebook
            </a>{" "}
            <br />
            <a href="https://www.instagram.com/alfilerstudio/" target="_blank">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
