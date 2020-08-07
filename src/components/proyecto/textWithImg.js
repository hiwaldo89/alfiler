import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

const TextWithImg = ({ content }) => {
  return (
    <div
      className="container"
      css={css`
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            &:first-of-type {
              width: 45%;
              flex: 0 0 45%;
            }
            &:last-of-type {
              width: 45%;
              flex: 0 0 45%;
              margin-left: auto;
              margin-top: auto;
            }
          }
        }
        .content {
          h2 {
            font-weight: 300;
            font-size: 1.2rem;
            margin-top: 0;
            margin-bottom: 3rem;
          }
          p {
            line-height: 2;
            margin-bottom: 3rem;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            line-height: 2;
            li {
              font-weight: 300;
              &:before {
                content: "-";
                display: inline-block;
                margin-right: 5px;
              }
            }
          }
        }
      `}
    >
      <div className="d-flex">
        <div>
          <Img fluid={content.image.fluid} alt={content.image.alt} />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content.text.html }}
        ></div>
      </div>
    </div>
  )
}

export default TextWithImg
