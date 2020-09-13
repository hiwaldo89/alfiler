import React from "react"
import { css } from "@emotion/core"
import useHovered from "../providers/hoverProvider"

const CursorFollower = ({ coordinates }) => {
  const { x, y } = coordinates
  const { hovered } = useHovered()

  return (
    <div
      css={css`
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translateX(-50%) translateY(-50%);
        pointer-events: none;
        background-color: #000000;
        z-index: 9999;
        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
        display: none;
        @media only screen and (min-width: 992px) {
          display: block;
        }
        &.hovered {
          width: 80px;
          height: 80px;
          span {
            opacity: 1;
          }
        }
        span {
          color: #fff;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          text-align: center;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
        }
      `}
      style={{
        left: x,
        top: y,
      }}
      className={hovered ? "hovered" : ""}
    >
      <span>Ver más</span>
    </div>
  )
}

export default CursorFollower
