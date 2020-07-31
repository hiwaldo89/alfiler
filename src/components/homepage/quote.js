import React, { useState } from "react"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const QuoteText = ({ quote, onMouseEnter, onMouseLeave }) => {
  const definitionMarker = quote.spans[0]
  return (
    <h2>
      {quote.text.substring(0, definitionMarker.start)}
      <span
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="definition"
      >
        {quote.text.substring(definitionMarker.start, definitionMarker.end)}
      </span>{" "}
      {quote.text.substring(definitionMarker.end, quote.text.length)}
    </h2>
  )
}

const Quote = ({ quote }) => {
  const [showDefinition, setShowDefinition] = useState(false)
  const [timer, setTimer] = useState(null)
  const definition = () => ({ __html: quote.definition.html })

  return (
    <div
      css={css`
        background: ${colors.lightgray};
        padding: 200px 0;
        text-align: center;
        h2 {
          margin: 0;
          font-weight: 400;
          span {
            cursor: pointer;
            font-weight: 700;
            font-style: italic;
          }
        }

        .quote-definition {
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease-in-out;
          &.show {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
    >
      <QuoteText
        quote={quote.quote_text.raw[0]}
        onMouseEnter={() => {
          clearTimeout(timer)
          setShowDefinition(true)
        }}
        onMouseLeave={() => {
          setTimer(
            setTimeout(function () {
              setShowDefinition(false)
            }, 500)
          )
        }}
      />
      <div
        className={`quote-definition${showDefinition ? " show" : ""}`}
        dangerouslySetInnerHTML={definition()}
      ></div>
    </div>
  )
}

export default Quote
