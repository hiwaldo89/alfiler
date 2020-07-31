import React from "react"
import { css } from "@emotion/core"

const CursorFollower = ({ coordinates }) => {
  const { x, y } = coordinates

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
      `}
      style={{
        left: x,
        top: y,
      }}
    ></div>
  )
}

export default CursorFollower
