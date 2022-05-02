import React, { useState, useContext, useMemo } from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Select from "react-select"
import { graphql } from "gatsby"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StoreContext } from "../context/store-context"
import StorePreview from "../components/storePreview"
import useWindowDimensions from "../hooks/useWindowDimensions"

const Product = ({
  data: {
    prismicProducts: product,
    shopifyProduct,
    shopifyAddons,
    allPrismicProducts,
    allShopifyProduct,
  },
}) => {
  const { width } = useWindowDimensions()
  const { addVariantToCart, openCart, checkout, removeLineItems, loading } =
    useContext(StoreContext)
  const productOptions = product.data.body.reduce((result, currentItem) => {
    result[currentItem.primary.variant_title.text] =
      currentItem.items[0].product_id1.text
    return result
  }, {})
  const [selectedOptions, setSelectedOptions] = useState(productOptions)

  const productLineItem = useMemo(() => {
    return checkout.lineItems.find(item => item.title === shopifyProduct.title)
  }, [checkout])

  const productAddons = useMemo(
    () =>
      checkout.lineItems.filter(item => {
        const relatedProduct = item.customAttributes.find(
          attr => attr.key === "Producto"
        )
        if (!relatedProduct) {
          return false
        }
        return relatedProduct.value === shopifyProduct.title
      }),
    [checkout]
  )

  const productTerms = useMemo(() => {
    if (product.data.product_terms.length > 1) {
      const middleIndex = Math.ceil(product.data.product_terms.length / 2)
      const firstHalf = [...product.data.product_terms].splice(0, middleIndex)
      const secondHalf = [...product.data.product_terms].splice(middleIndex)
      return [firstHalf, secondHalf]
    }
    return [product.data.product_terms, []]
  }, [product])

  const addToCart = async () => {
    const addonsToAdd = Object.values(selectedOptions).map(option => {
      const storefrontId = shopifyAddons.nodes.find(
        addon => addon.legacyResourceId === option
      ).variants[0].storefrontId
      return {
        variantId: storefrontId,
        quantity: 1,
        customAttributes: [
          {
            key: "Producto",
            value: shopifyProduct.title,
          },
        ],
      }
    })
    if (!!productLineItem) {
      const addonIds = productAddons.map(addon => addon.id)
      await removeLineItems(addonIds)
      await addVariantToCart(addonsToAdd)
      openCart()
      return
    }
    await addVariantToCart([
      {
        variantId: shopifyProduct.variants[0].storefrontId,
        quantity: 1,
      },
      ...addonsToAdd,
    ])
    // setLineItemsImages(prevState => [
    //   ...prevState,
    //   {
    //     title: shopifyProduct.title,
    //     fluid: product.data.product_images[0].image.fluid,
    //   },
    // ])
    openCart()
  }

  const shuffle = array => {
    const newArr = [...array]
    let currentIndex = newArr.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[newArr[currentIndex], newArr[randomIndex]] = [
        newArr[randomIndex],
        newArr[currentIndex],
      ]
    }

    return newArr
  }

  const otherProducts = shuffle(allPrismicProducts.nodes)
    .slice(0, 3)
    .map(product => {
      const shopifyProduct = allShopifyProduct.nodes.find(
        node => node.legacyResourceId === product.data.product_id.text
      )
      return {
        ...product,
        shopifyProduct,
      }
    })

  return (
    <Layout>
      <SEO
        title={product.data.title.text}
        description={product.data.product_description[0].content.text}
        meta={[
          {
            property: "og:image",
            content: product.data.product_images[0].image.url,
          },
        ]}
      />
      <div
        className="container"
        css={css`
          padding-top: 4rem;
          .d-flex {
            margin-left: -15px;
            margin-right: -15px;
          }
          .image-col,
          .desc-col {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            flex: 0 0 100%;
          }
          .image-col {
            @media (min-width: 768px) {
              width: 45%;
              flex: 0 0 45%;
            }
          }
          .desc-col {
            @media (min-width: 768px) {
              width: 50%;
              flex: 0 0 50%;
              margin-left: auto;
              position: sticky;
              top: 0;
            }
          }
          h1 {
            font-size: 25px;
            margin-bottom: 13px;
            font-weight: 300;
          }
          .product-img {
            margin-bottom: 27px;
          }
          .price-wrapper {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
          }
          .compare-price {
            text-decoration: line-through;
            margin: 0;
            margin-right: 20px;
          }
          .price {
            margin: 0;
            font-weight: 600;
          }
          .description-block {
            margin-bottom: 58px;
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-size: 16px;
            }
            p {
              line-height: 30px;
            }
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
              li {
                font-weight: 300;
                position: relative;
                padding-left: 15px;
                &:before {
                  content: "-";
                  position: absolute;
                  left: 0;
                  top: 0;
                }
                &:not(:last-of-type) {
                  margin-bottom: 0.5em;
                }
              }
            }
          }
          .options-block {
            h2 {
              font-size: 1rem;
              margin-bottom: 5px;
            }
            .option-desc {
              font-style: italic;
              margin: 0;
              font-size: 14px;
              color: #4b4b4b;
            }
          }
          .swatches {
            display: flex;
            margin-bottom: 80px;
            margin-top: 18px;
            & > div {
              span {
                text-align: center;
                font-weight: 300;
                display: block;
                margin-top: 15px;
              }
            }
            .swatch {
              width: 60px;
              height: 60px;
              padding: 8px;
              position: relative;
              margin-right: 5px;
              @media (min-width: 768px) {
                width: 100px;
                height: 100px;
              }
              & + span {
                @media (max-width: 767px) {
                  font-size: 80%;
                }
              }
              &.selected:before {
                content: "";
                display: block;
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                border: solid 1px #000;
              }
            }
            &--color {
              .swatch {
                width: 40px;
                height: 40px;
                padding: 5px 3px 3px 5px;
                @media (min-width: 768px) {
                  width: 70px;
                  height: 70px;
                }
                & > div {
                  border-radius: 50%;
                  overflow: hidden;
                }
                &.selected:before {
                  border-radius: 50%;
                }
              }
            }
          }
          .select-wrapper {
            margin-top: 8px;
          }
          .add-to-cart {
            background: #000;
            color: #fff;
            padding: 15px 35px;
            max-width: 100%;
            border: none;
            margin-top: 40px;
            cursor: pointer;
            letter-spacing: 3px;
            transition: all 0.3s ease-in-out;
            &:hover {
              opacity: 0.8;
            }
            &:disabled {
              cursor: not-allowed;
              opacity: 0.6;
            }
          }
        `}
      >
        <div
          className="d-flex"
          css={css`
            align-items: flex-start;
          `}
        >
          <div
            className="image-col"
            css={css`
              .slick-dots {
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex !important;
                justify-content: center;
                li {
                  width: 8px;
                  height: 8px;
                  border-radius: 100%;
                  background: rgba(0, 0, 0, 0.4);
                  overflow: hidden;
                  margin: 0 5px;
                  transition: all 0.3s ease-in-out;
                  button {
                    opacity: 0;
                  }
                  &.slick-active {
                    background: #000;
                    transform: scale(1.5);
                  }
                }
              }
            `}
          >
            {width > 767 ? (
              product.data.product_images.map(({ image }, index) => (
                <div key={`${image.url}-${index}`} className="product-img">
                  <Img fluid={image.fluid} />
                </div>
              ))
            ) : (
              <Slider arrows={false} dots>
                {product.data.product_images.map(({ image }, index) => (
                  <div key={`${image.url}-${index}`} className="product-img">
                    <Img fluid={image.fluid} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className="desc-col">
            <h1>{product.data.title.text}</h1>
            <div className="price-wrapper">
              {!!shopifyProduct.variants[0].compareAtPrice && (
                <p className="compare-price">
                  ${shopifyProduct.variants[0].compareAtPrice}
                </p>
              )}
              <p className="price">${shopifyProduct.variants[0].price}</p>
            </div>
            {product.data.product_description.map(block => (
              <div
                key={block.content.text}
                className="description-block"
                dangerouslySetInnerHTML={{ __html: block.content.html }}
              />
            ))}
            {product.data.body.map(slice => {
              return (
                <div key={slice.id} className="options-block">
                  <h2>{slice.primary.variant_title.text} *</h2>
                  {!!slice.primary.variant_description.text && (
                    <p className="option-desc">
                      {slice.primary.variant_description.text}
                    </p>
                  )}
                  {slice.slice_type === "variant" && (
                    <div
                      className={`swatches swatches--${slice.primary.variant_id.text}`}
                    >
                      {slice.items.map(item => (
                        <div
                          key={item.option_title.text}
                          css={css`
                            &:not(:last-of-type) {
                              margin-right: ${slice.primary.variant_id.text ===
                              "color"
                                ? "35px"
                                : 0};
                            }
                          `}
                        >
                          <div
                            className={`swatch${
                              selectedOptions[
                                slice.primary.variant_title.text
                              ] === item.product_id1.text
                                ? " selected"
                                : ""
                            }`}
                            onClick={() => {
                              setSelectedOptions(prevVal => ({
                                ...prevVal,
                                [slice.primary.variant_title.text]:
                                  item.product_id1.text,
                              }))
                            }}
                          >
                            <div>
                              <Img
                                fluid={item.option_image.fluid}
                                alt={item.option_title.text}
                              />
                            </div>
                          </div>
                          <span>{item.option_title.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {slice.slice_type === "variant_dropdown" && (
                    <div className="select-wrapper">
                      <Select
                        theme={theme => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                            primary: "black",
                            primary25: "rgba(0,0,0,0.1)",
                            primary50: "rgba(0,0,0,0.5",
                            primary75: "rgba(0,0,0,0.75)",
                          },
                        })}
                        defaultValue={{
                          label: slice.items[0].option_title.text,
                          value: slice.items[0].product_id1.text,
                        }}
                        options={slice.items.map(item => ({
                          label: item.option_title.text,
                          value: item.product_id1.text,
                        }))}
                        onChange={val => {
                          console.log(val)
                          setSelectedOptions(prevVal => ({
                            ...prevVal,
                            [slice.primary.variant_title.text]: val.value,
                          }))
                        }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
            <button
              className="add-to-cart"
              onClick={addToCart}
              disabled={loading}
            >
              {loading ? "AGREGANDO" : "AÑADIR AL CARRITO"}
            </button>
          </div>
        </div>
        <div
          className="d-flex"
          css={css`
            margin-top: 140px;
            margin-bottom: 100px;
            margin-left: -15px;
            margin-right: -15px;
            .terms-col {
              flex: 0 0 100%;
              padding-left: 15px;
              padding-right: 15px;
              @media (min-width: 768px) {
                flex: 0 0 50%;
              }
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-size: 18px;
              }
              p,
              ul {
                line-height: 1.8;
              }
              & > div {
                margin-bottom: 40px;
              }
              ul {
                list-style: none;
                margin: 0;
                padding: 0;
                li {
                  position: relative;
                  padding-left: 20px;
                  &:before {
                    content: "";
                    width: 8px;
                    position: absolute;
                    left: 0;
                    top: 0.8em;
                    height: 1px;
                    background: #000;
                  }
                }
              }
            }
          `}
        >
          {productTerms[0].length > 0 && (
            <div className="terms-col">
              {productTerms[0].map((block, index) => (
                <div
                  key={`left-${index}`}
                  dangerouslySetInnerHTML={{ __html: block.terms_content.html }}
                />
              ))}
            </div>
          )}
          {productTerms[1].length > 0 && (
            <div className="terms-col">
              {productTerms[1].map((block, index) => (
                <div
                  key={`right-${index}`}
                  dangerouslySetInnerHTML={{ __html: block.terms_content.html }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {otherProducts.length > 0 && (
        <div
          css={css`
            border-top: solid 1px #000;
            padding-top: 120px;
            margin-bottom: 150px;
          `}
        >
          <StorePreview products={otherProducts} />
        </div>
      )}
    </Layout>
  )
}

export default Product

export const PageQuery = graphql`
  query ProductById($id: String!, $addons: [String]) {
    prismicProducts(data: { product_id: { text: { eq: $id } } }) {
      data {
        title {
          text
        }
        product_description {
          content {
            html
            text
          }
        }
        product_images {
          image {
            url
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
        }
        product_terms {
          terms_content {
            html
          }
        }
        body {
          ... on PrismicProductsDataBodyVariant {
            id
            slice_type
            items {
              option_title {
                text
              }
              product_id1 {
                text
              }
              option_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
            primary {
              variant_title {
                text
              }
              variant_id {
                text
              }
              variant_description {
                text
              }
            }
          }
          ... on PrismicProductsDataBodyVariantDropdown {
            id
            slice_type
            items {
              option_title {
                text
              }
              product_id1 {
                text
              }
            }
            primary {
              variant_title {
                text
              }
              variant_description {
                text
              }
            }
          }
        }
      }
    }
    shopifyProduct(legacyResourceId: { eq: $id }) {
      legacyResourceId
      title
      variants {
        storefrontId
        price
        compareAtPrice
      }
    }
    shopifyAddons: allShopifyProduct(
      filter: { legacyResourceId: { in: $addons } }
    ) {
      nodes {
        legacyResourceId
        variants {
          storefrontId
        }
      }
    }
    allShopifyProduct {
      nodes {
        legacyResourceId
        variants {
          price
          compareAtPrice
        }
      }
    }
    allPrismicProducts(
      filter: { data: { product_id: { text: { ne: $id } } } }
    ) {
      nodes {
        data {
          product_id {
            text
          }
          product_images {
            image {
              url
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
          title {
            text
          }
        }
      }
    }
  }
`
