import React from "react"
import { css } from "@emotion/core"
import Logo from "../images/alfiler-footer-logo.inline.svg"

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: #f0f0f0;
        padding-top: 72px;
        padding-bottom: 70px;
        .logo {
          width: 35%;
          min-width: 120px;
          height: auto;
        }
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
            width: 100%;
            flex: 0 0 100%;
            margin-bottom: 2rem;
            text-align: center;
            @media (min-width: 768px) {
              width: 25%;
              flex: 0 0 25%;
              margin-bottom: 0;
              text-align: left;
              &:nth-of-type(2),
              &:nth-of-type(3),
              &:nth-of-type(4) {
                text-align: center;
              }
            }
            h4 {
              margin-top: 0;
              margin-bottom: 10px;
            }
            a {
              display: inline-block;
              color: inherit;
              font-weight: 300;
              margin-bottom: 1rem;
            }
            p:first-of-type {
              margin-top: 0;
            }
          }
        }
      `}
    >
      <div className="container d-flex">
        <div>
          <Logo className="logo" />
        </div>
        <div>
          <div className="inline-block">
            <h4>Síguenos</h4>
            <a href="https://www.facebook.com/AlfilerStudio" target="_blank">
              Facebook
            </a>{" "}
            <br />
            <a href="https://www.instagram.com/alfilerstudio/" target="_blank">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <div className="inline-block">
            <h4>Whatsapp only </h4>
            <a href="https://wa.me/+524424644699" target="_blank">
              442 464 4699
            </a>{" "}
            <br />
          </div>
        </div>
        <div>
          <div className="inline-block">
            <h4>Horarios:</h4>
            <p>L a J: 9:00 - 18:00</p>
            <p>V: 9:00 - 16:00</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
