import React from "react"
import { css } from "@emotion/core"

const Columns = ({ content = [], id }) => {
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
            @media (min-width: 768px) {
              flex: 1;
            }
          }
        }
      `}
    >
      <div className="d-flex">
        {content.map((column, index) => (
          <div key={`${id}-column-${index}`}>
            <div
              dangerouslySetInnerHTML={{
                __html: column.column_content.html || null,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Columns
