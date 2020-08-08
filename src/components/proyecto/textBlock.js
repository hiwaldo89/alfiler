import React from "react"
import { css } from "@emotion/core"

const TextBlock = ({ content }) => {
  return (
    <div
      className="container"
      css={css`
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            width: 60%;
            flex: 0 0 60%;
            margin: auto;
          }
        }
        .heading-1 {
          text-align: center;
          font-size: 1.2rem;
        }
        .heading-2 {
          font-weight: 300;
          font-size: 1.2rem;
          margin-bottom: 3rem;
        }
        p {
          line-height: 2;
        }
      `}
    >
      <div className="d-flex">
        <div>
          <h2
            className={`${
              content.title1.raw[0].type === "heading1"
                ? "heading-1"
                : "heading-2"
            }`}
            data-sal="slide-up"
            data-sal-duration="350"
            data-sal-delay="300"
          >
            {content.title1.raw[0].text}
          </h2>
          <p data-sal="slide-up" data-sal-duration="350" data-sal-delay="400">
            {content.content.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TextBlock
