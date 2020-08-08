import React from "react"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { css } from "@emotion/core"

const TwoColImg = ({ content }) => {
  return (
    <div
      className="container"
      css={css`
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            width: 45%;
            flex: 0 0 45%;
            &:last-of-type {
              margin-left: auto;
            }
          }
        }
      `}
    >
      <ParallaxProvider>
        <div className="d-flex">
          <div>
            <Parallax y={[0, -20]}>
              <Img
                fluid={content.left_image.fluid}
                alt={content.left_image.alt || ""}
              />
            </Parallax>
          </div>
          <div>
            <Parallax y={[0, 50]}>
              <Img
                fluid={content.right_image.fluid}
                alt={content.right_image.alt || ""}
              />
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  )
}

export default TwoColImg
