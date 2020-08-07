import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const FullWidthImg = ({ content }) => {
  return (
    <div
      className="container"
      css={css`
        & > div {
          display: block;
          position: relative;
          &:after {
            content: "";
            display: block;
            padding-top: 47%;
          }
        }
      `}
    >
      <div>
        <Img
          fluid={content.image.fluid}
          alt={content.image.alt}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
          }}
        />
      </div>
    </div>
  )
}

export default FullWidthImg
