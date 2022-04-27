import React, { useState } from "react"
import { css } from "@emotion/core"
import GatsbyImage from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useTiendaPage from "../utils/useTiendaPage"
import CategorySelector from "../components/tienda/CategorySelector"
import ProductGrid from "../components/tienda/ProductGrid"

const Tienda = ({ location }) => {
  const params = new URLSearchParams(location.search)
  const category = params.get("category")
  const { store, productCategories, products } = useTiendaPage()
  const [cat, setCat] = useState(category)

  return (
    <Layout>
      <SEO
        title="Tienda"
        description="Creamos la identidad de cada marca mediante una metodología y diseño estratégico que nos permite comunicar la esencia y atributos de valor de cada una de ellas."
      />
      <h1 className="sr-only">Tienda</h1>
      <div
        css={css`
          padding-top: 4rem;
          h2 {
            font-weight: 300;
            font-size: 2rem;
            margin-top: 0;
            @media (min-width: 768px) {
              font-size: 2.5rem;
            }
          }
          .content {
            p {
              line-height: 2.2;
            }
            @media (min-width: 768px) {
              width: 70%;
            }
          }
        `}
      >
        <div className="container">
          <div className="content">
            <h2
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="350"
            >
              {store.title}
            </h2>
            <p data-sal="slide-up" data-sal-delay="400" data-sal-duration="350">
              {store.description}
            </p>
          </div>
        </div>
      </div>
      <CategorySelector
        categories={productCategories}
        selectedCategory={cat}
        setSelectedCategory={setCat}
      />
      <ProductGrid products={products} selectedCategory={cat} />
      <div className="container">
        <div
          css={css`
            border-top: solid 1px #000;
            padding-top: 80px;
          `}
        ></div>
      </div>
      <div
        css={css`
          width: 100%;
          padding-right: 15px;
          margin-bottom: 85px;
          @media (min-width: 576px) {
            max-width: calc(100% - (50% - 270px));
          }
          @media (min-width: 768px) {
            max-width: calc(100% - (50% - 360px));
          }
          @media (min-width: 992px) {
            max-width: calc(100% - (50% - 480px));
          }
          @media (min-width: 1200px) {
            max-width: calc(100% - (50% - 570px));
          }
          .col {
            flex: 0 0 33.3333333%;
            padding-left: 25px;
            padding-right: 25px;
          }
        `}
      >
        <div
          className="d-flex"
          css={css`
            margin-left: -25px;
            margin-right: -25px;
          `}
        >
          <div
            className="col"
            css={css`
              margin-top: 20%;
            `}
          >
            <GatsbyImage
              fluid={store.footerImages[0].fluid}
              alt={store.footerImages[0].alt || ""}
            />
          </div>
          <div
            className="col"
            css={css`
              text-align: center;
            `}
          >
            <GatsbyImage
              fluid={store.footerImages[1].fluid}
              alt={store.footerImages[1].alt || ""}
            />
            <div
              css={css`
                margin-top: 150px;
                span {
                  display: block;
                  margin-bottom: 15px;
                }
                a {
                  color: inherit;
                  font-style: italic;
                }
              `}
            >
              <span>¿Buscas un proyecto a la medida?</span>
              <a href="#">Escríbenos</a>
            </div>
          </div>
          <div
            className="col"
            css={css`
              margin-top: 15%;
            `}
          >
            <div
              css={css`
                padding-left: 50px;
              `}
            >
              <GatsbyImage
                fluid={store.footerImages[2].fluid}
                alt={store.footerImages[2].alt || ""}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Tienda
