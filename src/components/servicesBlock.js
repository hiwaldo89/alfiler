import React from "react"
import { css } from "@emotion/core"

const ServicesBlock = ({ services }) => {
  return (
    <div
      className="d-flex"
      css={css`
        .services-wrapper {
          width: 80%;
          flex: 0 0 80%;
          margin: auto;
          & > div {
            width: 40%;
            flex: 0 0 40%;
            h3 {
              word-spacing: 100vw;
            }
            & > div {
              font-weight: 300;
              p {
                line-height: 2;
              }
              ul {
                list-style: none;
                margin: 0;
                padding: 0;
                margin-top: 3rem;
                li {
                  margin-bottom: 1em;
                  line-height: 2;
                  &:before {
                    content: "-";
                    display: inline-block;
                    margin-right: 10px;
                  }
                }
              }
            }
            &:nth-of-type(1) {
              margin-right: auto;
            }
          }
        }
      `}
    >
      <div className="services-wrapper d-flex">
        {services.map((service, index) => (
          <div key={`service-item-${index}`}>
            <h3>{service.title.text || ""}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: service.content.html || "" }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesBlock
