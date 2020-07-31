import React from "react"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const OurManifesto = ({ manifesto }) => {
  return (
    <div
      css={css`
        padding-bottom: 190px;
        background-color: ${colors.lightgray};
        h2 {
          font-weight: 300;
          font-size: 2.5rem;
          margin-top: 0;
          padding-top: 4rem;
        }
        .wrapper {
          width: 100%;
          margin-left: -15px;
          margin-right: -15px;
          @media (min-width: 992px) {
            width: 90%;
          }
          .column {
            width: 50%;
            flex: 0 0 50%;
            padding-left: 15px;
            padding-right: 15px;
            p {
              line-height: 1.8;
            }
          }
        }
      `}
    >
      <div className="container">
        <h2>{manifesto.title}</h2>
        <div className="wrapper d-flex">
          <div className="column">
            <p>{manifesto.column_1}</p>
          </div>
          <div className="column">
            <p>{manifesto.column_2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurManifesto
