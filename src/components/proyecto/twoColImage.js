import React from "react"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { css } from "@emotion/react"

const TwoColImg = ({ content }) => {
  return (
    <div
      className="container"
      css={css`
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          padding-bottom: 3rem;
          & > div {
            width: 100%;
            flex: 0 0 100%;
            padding-left: 15px;
            padding-right: 15px;
            @media (min-width: 768px) {
              width: 45%;
              flex: 0 0 45%;
              padding: 0;
            }
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
            {!!content.left_image?.fluid && (
              <Parallax y={[0, -20]}>
                <Img
                  fluid={content.left_image.fluid}
                  alt={content.left_image?.alt || ""}
                />
              </Parallax>
            )}
          </div>
          <div>
            {!!content.right_image?.fluid && (
              <Parallax y={[0, 20]}>
                <Img
                  fluid={content.right_image.fluid}
                  alt={content.right_image?.alt || ""}
                />
              </Parallax>
            )}
          </div>
        </div>
      </ParallaxProvider>
    </div>
  )
}

export default TwoColImg
