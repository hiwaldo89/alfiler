import React, { useState } from "react"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const QuoteText = ({ quote, onMouseEnter, onMouseLeave }) => {
  const definitionMarker = quote.spans[0]
  return (
    <h2 data-sal="slide-up" data-sal-delay="300" data-sal-duration="350">
      {quote.text.substring(0, definitionMarker.start)}
      <span
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="definition"
      >
        <span>
          {quote.text.substring(definitionMarker.start, definitionMarker.end)}
        </span>
        <span>
          {quote.text.substring(definitionMarker.start, definitionMarker.end)}
        </span>
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
          font-size: 2.5rem;
          span {
            cursor: pointer;
            font-weight: 700;
            font-style: italic;
            display: inline-block;
            position: relative;

            & > span {
              &:first-of-type {
                opacity: 1;
                transition: all 0.3s ease-in-out;
              }
              &:last-of-type {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                font-style: normal;
                opacity: 0;
                transition: all 0.3s ease-in-out;
              }
            }
            &:hover {
              & > span {
                &:first-of-type {
                  opacity: 0;
                }
                &:last-of-type {
                  opacity: 1;
                }
              }
            }
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
