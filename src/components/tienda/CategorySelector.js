import React from "react"
import { css } from "@emotion/core"

const CategorySelector = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div
      css={css`
        margin-top: 50px;
        margin-bottom: 45px;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          padding: 12px 15px;
          border-top: solid 1px #000;
          border-bottom: solid 1px #000;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          text-align: center;
          @media (min-width: 768px) {
            flex-direction: row;
          }
          li {
            margin-bottom: 40px;
            &:last-child {
              margin-bottom: 0;
            }
            @media (min-width: 768px) {
              margin-left: 170px;
              margin-bottom: 0;
            }
            &:first-of-type {
              margin-left: 0;
            }
            &.active {
              button {
                font-weight: 600;
              }
            }
            button {
              background: transparent;
              border: none;
              padding: 0;
            }
          }
        }
      `}
      className="container"
    >
      <ul>
        <li className={!selectedCategory ? "active" : ""}>
          <button onClick={() => setSelectedCategory(null)}>Todos</button>
        </li>
        {categories.map(category => (
          <li
            key={category.id}
            className={category.id === selectedCategory ? "active" : ""}
          >
            <button onClick={() => setSelectedCategory(category.id)}>
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySelector
