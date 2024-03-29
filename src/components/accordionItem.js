import React, { useState, useRef, useEffect } from "react"
import { css } from "@emotion/react"

const AccordionItem = ({ item, opened = false }) => {
  const [active, setActive] = useState(opened)
  const panel = useRef(null)
  useEffect(() => {
    if (!active) {
      panel.current.style.maxHeight = null
    } else {
      panel.current.style.maxHeight = panel.current.scrollHeight + "px"
    }
  }, [active])

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
          text-align: center;
          @media (min-width: 768px) {
            text-align: left;
          }
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
          .content {
            padding-top: 2rem;
            color: #8f8f8f;
            line-height: 2;
          }
        }
      `}
    >
      <button onClick={() => setActive(!active)}>
        {active ? <span>-</span> : <span>+</span>}
        {item.title}
      </button>
      <div className="panel" ref={panel}>
        <div
          dangerouslySetInnerHTML={{ __html: item.content }}
          className="content"
        ></div>
      </div>
    </div>
  )
}

export default AccordionItem
