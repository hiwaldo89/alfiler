import React, { useState } from "react"
import { css } from "@emotion/core"

const AccordionItem = ({ item, opened = false }) => {
  const [active, setActive] = useState(opened)
  const toggleAccordion = e => {
    const panel = e.target.nextElementSibling
    if (active) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  }

  return (
    <div
      className="accordion-item"
      css={css`
        button {
          background: transparent;
          border: none;
          cursor: pointer;
          width: 100%;
          padding: 0;
          text-align: left;
          &:active,
          &:focus {
            outline: none;
          }
          span {
            display: inline-block;
            margin-right: 5px;
            &:nth-of-type(2) {
              display: none;
            }
          }
          &.active {
            & + div.panel {
              max-height: initial;
            }
          }
        }
        .panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.2s ease-out;
          p {
            padding-top: 2rem;
            color: #8f8f8f;
            line-height: 2;
          }
        }
      `}
    >
      <button
        onClick={e => {
          setActive(!active)
          toggleAccordion(e)
        }}
        className={`${active ? "active" : ""}`}
      >
        {active ? <span>-</span> : <span>+</span>}
        {item.title}
      </button>
      <div className="panel">
        <p>{item.content}</p>
      </div>
    </div>
  )
}

export default AccordionItem
