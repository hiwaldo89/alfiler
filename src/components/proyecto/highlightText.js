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
          &.align-right {
            justify-content: center;
            @media (min-width: 768px) {
              justify-content: flex-end;
            }
          }
          &.align-center {
            justify-content: center;
          }
          &.align-left {
            justify-content: center;
            @media (min-width: 768px) {
              justify-content: flex-start;
            }
          }
          & > div {
            text-align: center;
            padding-left: 15px;
            padding-right: 15px;
            @media (min-width: 768px) {
              text-align: right;
            }
          }
          h2 {
            display: inline-block;
            max-width: 300px;
            font-weight: 300;
            text-align: center;
            font-size: 1.5rem;
            @media (min-width: 768px) {
              font-size: 2rem;
              text-align: left;
            }
            span {
              display: block;
              &:not(:last-of-type) {
                margin-bottom: 2rem;
              }
            }
          }
        }
        .subheading {
          &-left {
            text-align: center;
            line-height: 2;
            @media (min-width: 768px) {
              text-align: left;
            }
          }
          &-center {
            text-align: center;
            line-height: 2;
            @media (min-width: 768px) {
              text-align: center;
            }
          }
          &-right {
            text-align: center;
            line-height: 2;
            @media (min-width: 768px) {
              text-align: right;
            }
          }
        }
      `}
    >
      <div className={`d-flex align-${content.alignment || "right"}`}>
        <div>
          {!!content.text && (
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
          )}
        </div>
      </div>
      {!!content.sub_heading && (
        <div
          className={`subheading-${content.subheading_alignment || "left"}`}
          dangerouslySetInnerHTML={{ __html: content.sub_heading?.html || "" }}
        ></div>
      )}
    </div>
  )
}

export default HighlightText
