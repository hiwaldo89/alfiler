import React from "react"
import { css } from "@emotion/core"

const OurServices = ({ services }) => {
  return (
    <div
      className="container"
      css={css`
        padding-bottom: 52px;
        h2 {
          font-size: 50px;
          line-height: 1.2em;
          margin-bottom: 80px;
        }
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
      <h2>
        This is how <br /> we do it
      </h2>
      <div className="d-flex">
        <div className="services-wrapper d-flex">
          {services.map((service, index) => (
            <div key={`service-item-${index}`}>
              <h3>{service.title.text}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: service.content.html }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurServices
