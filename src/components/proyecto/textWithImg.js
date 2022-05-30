import React from "react"
import { css } from "@emotion/react"
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
            width: 100%;
            flex: 0 0 100%;
            padding-left: 15px;
            padding-right: 15px;
            @media (min-width: 768px) {
              padding-left: 0;
              padding-right: 0;
            }
            &:first-of-type {
              @media (min-width: 768px) {
                width: 45%;
                flex: 0 0 45%;
              }
            }
            &:last-of-type {
              width: 100%;
              flex: 0 0 100%;
              @media (min-width: 768px) {
                width: 45%;
                flex: 0 0 45%;
                margin-left: auto;
                margin-top: auto;
              }
            }
          }
        }
        .content {
          @media (max-width: 767px) {
            text-align: center;
          }
          h2 {
            font-weight: 300;
            font-size: 1.2rem;
            margin-top: 0;
            margin-bottom: 3rem;
          }
          p {
            line-height: 2;
            margin-bottom: 0.5rem;
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
          {!!content.image?.fluid && (
            <Img fluid={content.image.fluid} alt={content.image.alt} />
          )}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content.text?.html || null }}
        ></div>
      </div>
    </div>
  )
}

export default TextWithImg
