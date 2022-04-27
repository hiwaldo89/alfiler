import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import HoverableComponent from "../hocs/HoverableComponent"

const ProductCard = HoverableComponent(
  ({ to, img, title, price, compareAtPrice, ...props }) => {
    return (
      <div
        {...props}
        css={css`
          padding-left: 15px;
          padding-right: 15px;
          flex: 0 0 33.3333333%;
          h3 {
            margin: 25px 0 10px 0;
          }
          p {
            margin: 0;
          }
          .relatedprod-price {
            display: flex;
          }
          .compare-price {
            position: relative;
            margin-right: 20px;
            &:after {
              content: "";
              display: block;
              position: absolute;
              width: calc(100% + 10px);
              top: 0;
              bottom: 0;
              margin: auto;
              left: -5px;
              height: 1px;
              background: #000;
            }
          }
          a {
            color: inherit;
          }
        `}
      >
        <Link to={to}>
          <Img fluid={img} />
          <h3>{title}</h3>
          <div className="relatedprod-price">
            {!!compareAtPrice && (
              <p className="compare-price">${compareAtPrice} MXN</p>
            )}
            <p>${price} MXN</p>
          </div>
        </Link>
      </div>
    )
  }
)

const StorePreview = ({
  title = "Más productos de nuestra tienda",
  products,
  ...props
}) => {
  return (
    <div className="container" {...props}>
      <div
        className="d-flex"
        css={css`
          margin-bottom: 90px;
          h3 {
            margin: 0;
            font-weight: 300;
            font-size: 25px;
          }
          a {
            margin-left: auto;
            color: inherit;
            font-weight: 600;
            letter-spacing: 3px;
          }
        `}
      >
        <h3>{title}</h3>
        <Link to="/tienda">VER TODOS</Link>
      </div>
      <div
        className="d-flex"
        css={css`
          margin-left: -15px;
          margin-right: -15px;
        `}
      >
        {products.map(product => (
          <ProductCard
            key={product.data.product_id.text}
            to={`/productos/${product.data.product_id.text}`}
            img={product.data.product_images[0].image.fluid}
            title={product.data.title.text}
            price={product.shopifyProduct.variants[0].price}
            compareAtPrice={product.shopifyProduct.variants[0].compareAtPrice}
          />
        ))}
      </div>
    </div>
  )
}

export default StorePreview
