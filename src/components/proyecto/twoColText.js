import React from "react"
import { css } from "@emotion/core"

const TwoColText = ({ content }) => {
  return (
    <div
      className="container"
      css={css`
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            flex: 0 0 100%;
            &:first-of-type {
              @media (min-width: 768px) {
                width: 70%;
                flex: 0 0 70%;
              }
            }
            &:last-of-type {
              @media (min-width: 768px) {
                width: 30%;
                flex: 0 0 30%;
              }
            }
          }
        }
        h2 {
          font-weight: 300;
          font-size: 2rem;
        }
        .content {
          line-height: 2;
        }
        .right-col {
          text-align: right;
        }
        ul {
          display: inline-block;
          text-align: left;
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            position: relative;
            font-weight: 300;
            &:before {
              content: "-";
              display: inline-block;
              margin-right: 5px;
            }
          }
        }
      `}
    >
      {!!content.title1 && (
        <h2 data-sal="slide-up" data-sal-duration="350" data-sal-delay="300">
          {content.title1.text}
        </h2>
      )}
      <div className="d-flex">
        <div>
          {!!content.left_column_text && (
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: content.left_column_text.html,
              }}
              data-sal="slide-up"
              data-sal-duration="350"
              data-sal-delay="300"
            ></div>
          )}
        </div>
        <div
          className="right-col"
          dangerouslySetInnerHTML={{
            __html: content.right_column_text?.html || null,
          }}
          data-sal="slide-up"
          data-sal-duration="350"
          data-sal-delay="400"
        ></div>
      </div>
    </div>
  )
}

export default TwoColText
