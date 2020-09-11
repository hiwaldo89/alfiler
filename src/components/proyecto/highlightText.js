import React from "react"
import { css } from "@emotion/core"

const HighlightText = ({ content }) => {
  return (
    <div
      className="container"
      css={css`
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            width: 70%;
            flex: 0 0 70%;
            text-align: right;
            margin: auto;
          }
          h2 {
            display: inline-block;
            max-width: 300px;
            font-weight: 300;
            text-align: left;
            font-size: 2rem;
            span {
              display: block;
              &:not(:last-of-type) {
                margin-bottom: 2rem;
              }
            }
          }
        }
      `}
    >
      <div className="d-flex">
        <div>
          <h2>
            {content.text.raw.map((line, index) => {
              return (
                line.text !== "" && (
                  <span
                    key={`line-${index}`}
                    data-sal={index > 0 ? "slide-up" : ""}
                    data-sal-duration="350"
                    data-sal-delay="300"
                  >
                    {line.text}
                  </span>
                )
              )
            })}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default HighlightText
