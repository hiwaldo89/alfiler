import React from "react"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const OurDayToDay = ({ gallery }) => {
  const col1 = gallery.slice(0, 2)
  const col2 = gallery.slice(2, 4)
  return (
    <div
      css={css`
        padding-bottom: 150px;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 60%;
          top: 0;
          left: 0;
          background-color: ${colors.lightgray};
          z-index: -1;
        }
        h2 {
          font-size: 2.5rem;
          font-weight: 300;
          margin-top: 0;
          padding-top: 3rem;
        }
        .gallery-wrapper {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            width: 50%;
            flex: 0 0 50%;
            padding-left: 15px;
            padding-right: 15px;
            .item {
              margin-bottom: 30px;
            }
          }
        }
      `}
    >
      <div className="container">
        <h2>Our day to day</h2>
        <ParallaxProvider>
          <div className="gallery-wrapper d-flex">
            <div>
              <Parallax y={[0, 5]}>
                {col1.map((item, index) => (
                  <Img
                    key={`gallery-col1-item-${index}`}
                    fluid={item}
                    className="item"
                  />
                ))}
              </Parallax>
            </div>
            <div>
              <Parallax y={[0, -10]}>
                {col2.map((item, index) => (
                  <Img
                    key={`gallery-col2-item-${index}`}
                    fluid={item}
                    className="item"
                  />
                ))}
              </Parallax>
            </div>
          </div>
        </ParallaxProvider>
      </div>
    </div>
  )
}

export default OurDayToDay
