import React from "react"
import { css } from "@emotion/react"
import { colors } from "../../utils/colors"
import AccordionItem from "../accordionItem"

const BrandingStudioServices = ({ services }) => {
  return (
    <div
      css={css`
        padding-bottom: 80px;
        background-color: ${colors.lightgray};
        .services-wrapper {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            width: 100%;
            flex: 0 0 100%;
            padding-left: 15px;
            padding-right: 15px;
            margin-bottom: 2rem;
            @media (min-width: 768px) {
              width: 33.3333333%;
              flex: 0 0 33.3333333%;
              margin-bottom: 0;
            }
          }
          h2 {
            font-size: 1.2rem;
            text-align: center;
            @media (min-width: 768px) {
              text-align: left;
            }
          }
        }
        .accordion-item {
          &:not(:last-of-type) {
            margin-bottom: 2rem;
          }
        }
      `}
    >
      <div className="container">
        <div className="d-flex services-wrapper">
          {Object.keys(services).map((item, index) => {
            return (
              <div
                key={`service-item-${index}`}
                data-sal="slide-up"
                data-sal-duration="350"
                data-sal-delay="300"
              >
                <h2>
                  {item === "confeccion"
                    ? "Confección"
                    : `${item.charAt(0).toUpperCase()}${item.slice(1)}`}
                </h2>
                {services[item].map((item, i) => {
                  return (
                    <div
                      className="accordion-item"
                      key={`service-item-${index}-${i}`}
                    >
                      <AccordionItem
                        item={item}
                        opened={i === 0 ? true : false}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BrandingStudioServices
