import React from "react"
import { css } from "@emotion/core"
import Fade from "react-reveal"
import { Link } from "gatsby"

import ProductCard from "./ProductCard"

const ProductGrid = ({ products, selectedCategory }) => {
  const filteredProducts = !!selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products

  return (
    <div
      className="container"
      css={css`
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            flex: 0 0 100%;
            margin-bottom: 50px;
            @media (min-width: 768px) {
              width: 33.3333333%;
              flex: 0 0 33.3333333%;
            }
          }
        }
      `}
    >
      <div className="d-flex">
        {filteredProducts.map(product => (
          <Fade key={product.id}>
            <Link to={`/productos/${product.id}`}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                compareAtPrice={product.compareAtPrice}
                description={product.description}
                outOfStock={product.outOfStock}
              />
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
