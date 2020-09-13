import React from "react"
import { css } from "@emotion/core"
import ServicesBlock from "../servicesBlock"

const OurServices = ({ services }) => {
  return (
    <div
      className="container"
      css={css`
        padding-bottom: 52px;
        h2 {
          font-size: 2rem;
          line-height: 1.2em;
          margin-bottom: 80px;
          @media (min-width: 768px) {
            font-size: 50px;
          }
        }
      `}
    >
      <h2 data-sal="slide-up" data-sal-delay="300" data-sal-duration="350">
        This is how <br /> we do it
      </h2>
      <ServicesBlock services={services} />
    </div>
  )
}

export default OurServices
