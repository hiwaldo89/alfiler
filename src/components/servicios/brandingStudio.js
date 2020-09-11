import React from "react"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const BrandingStudio = ({ brandingStudio }) => {
  return (
    <div
      css={css`
        padding-bottom: 93px;
        padding-top: 4rem;
        background-color: ${colors.lightgray};
        h2 {
          font-weight: 300;
          font-size: 2.5rem;
          margin-top: 0;
        }
        .content {
          width: 60%;
          p {
            line-height: 2.2;
          }
        }
      `}
    >
      <div className="container">
        <div className="content">
          <h2 data-sal="slide-up" data-sal-delay="300" data-sal-duration="350">
            {brandingStudio.title || ""}
          </h2>
          <p data-sal="slide-up" data-sal-delay="400" data-sal-duration="350">
            {brandingStudio.content || ""}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BrandingStudio
