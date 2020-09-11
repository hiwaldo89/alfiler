import React from "react"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const About = ({ blocks }) => {
  return (
    <div
      css={css`
        background-color: ${colors.lightgray};
        .about {
          padding-left: 15px;
          padding-right: 15px;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          @media (min-width: 576px) {
            width: 540px;
          }
          @media (min-width: 768px) {
            padding-right: 0;
            margin-right: 0;
            width: calc(100vw - (50vw - 330px));
          }
          @media (min-width: 992px) {
            width: calc(100vw - (50vw - 450px));
          }
          @media (min-width: 1200px) {
            width: calc(100vw - (50vw - 540px));
          }
          & > div {
            position: relative;
            &:nth-of-type(1) {
              width: 40%;
              flex: 0 0 40%;
              margin-right: auto;
              .image {
                margin-bottom: 68px;
              }
            }
            &:nth-of-type(2) {
              width: 50%;
              flex: 0 0 50%;
              .image {
                margin-bottom: 85px;
              }
              p {
                width: 70%;
              }
            }
            p {
              line-height: 1.8em;
              letter-spacing: 0.05em;
              font-size: 16px;
            }
          }
        }
      `}
    >
      <ParallaxProvider>
        <div className="about">
          {blocks.map((block, index) => {
            let offset
            if (index === 0) {
              offset = [0, -20]
            } else {
              offset = [0, 10]
            }
            return (
              <div key={`about-block-${index}`}>
                <Parallax y={offset}>
                  <div>
                    {block.image && (
                      <div className="image">
                        <Img fluid={block.image.fluid} />
                      </div>
                    )}
                    {block.block_content && <p>{block.block_content.text}</p>}
                  </div>
                </Parallax>
              </div>
            )
          })}
        </div>
      </ParallaxProvider>
    </div>
  )
}

export default About
