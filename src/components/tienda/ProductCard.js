import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const ProductCard = ({
  image,
  title,
  price,
  compareAtPrice,
  description,
  outOfStock,
}) => {
  return (
    <div
      css={css`
        position: relative;
        color: #000;
        h2 {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .price-wrapper {
          display: flex;
          align-items: center;
        }
        .compare-price {
          margin-right: 20px;
          position: relative;
          &:after {
            content: "";
            display: block;
            width: calc(100% + 10px);
            position: absolute;
            top: 0;
            left: -5px;
            bottom: 0;
            margin: auto;
            height: 1px;
            background: #000;
          }
        }
        .description {
          line-height: 25px;
          margin-top: 15px;
          margin-bottom: 0;
        }
        .tag {
          background: #000;
          color: #fff;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
          width: 184px;
          height: 29px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
    >
      {outOfStock && <span className="tag">AGOTADO</span>}
      {!!compareAtPrice && !outOfStock && <span className="tag">OFERTA</span>}
      <Img fluid={image} />
      <h2>{title}</h2>
      <div className="price-wrapper">
        {!!compareAtPrice && <p className="compare-price">${compareAtPrice}</p>}
        <p className="price">
          $
          {Number(price).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

export default ProductCard
