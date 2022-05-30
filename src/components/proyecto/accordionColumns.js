import React from "react"
import { css } from "@emotion/react"
import AccordionItem from "../accordionItem"

const AccordionColumns = ({ content = [], id }) => {
  return (
    <div
      className="container"
      css={css`
        display: flex;
        .d-flex {
          width: 100%;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            flex: 0 0 100%;
            margin-bottom: 2rem;
            text-align: center;
            @media (min-width: 768px) {
              flex: 1;
              margin-bottom: 0;
            }
            & > div {
              text-align: center;
              @media (min-width: 768px) {
                display: inline-block;
                text-align: left;
              }
            }
          }
        }
      `}
    >
      <div className="d-flex">
        {content.map((column, index) => (
          <div key={`${id}-column-${index}`}>
            <AccordionItem
              item={{
                title: column.title1?.text || "",
                content: column.content?.html || "",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccordionColumns
