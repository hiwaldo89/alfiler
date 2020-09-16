import React from "react"
import { css } from "@emotion/core"
import AccordionItem from "../accordionItem"

const AccordionColumns = ({ content = [], id }) => {
  return (
    <div
      className="container"
      css={css`
        display: flex;
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          width: 100%;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            flex: 0 0 100%;
            text-align: center;
            @media (min-width: 768px) {
              flex: 1;
            }
            & > div {
              display: inline-block;
              text-align: left;
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