import React from "react"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const OurManifesto = ({ manifesto }) => {
  return (
    <div
      css={css`
        padding-bottom: 100px;
        background-color: ${colors.lightgray};
        h2 {
          font-weight: 300;
          font-size: 2rem;
          margin-top: 0;
          padding-top: 4rem;
          @media (min-width: 768px) {
            font-size: 2.5rem;
          }
        }
        .wrapper {
          width: 100%;
          margin-left: -15px;
          margin-right: -15px;
          .column {
            width: 100%;
            flex: 0 0 100%;
            padding-left: 15px;
            padding-right: 15px;
            @media (min-width: 768px) {
              width: 45%;
              flex: 0 0 45%;
            }
            &:first-of-type {
              margin-right: auto;
            }
            p {
              line-height: 1.8;
            }
          }
        }
      `}
    >
      <div className="container">
        <h2 data-sal="slide-up" data-sal-duration="350">
          {manifesto.title}
        </h2>
        <div className="wrapper d-flex">
          <div
            className="column"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="350"
          >
            <div dangerouslySetInnerHTML={{ __html: manifesto.column_1 }}></div>
          </div>
          <div
            className="column"
            data-sal="slide-up"
            data-sal-delay="350"
            data-sal-duration="350"
          >
            <div dangerouslySetInnerHTML={{ __html: manifesto.column_2 }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurManifesto
