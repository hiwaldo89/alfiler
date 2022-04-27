import { useStaticQuery, graphql } from "gatsby"

const useHomepage = () => {
  const { prismicHome, allPrismicProducts, allShopifyProduct } =
    useStaticQuery(graphql`
      {
        prismicHome {
          data {
            quote {
              quote_text {
                raw
              }
              definition {
                text
                html
              }
            }
            about {
              block_content {
                html
              }
              image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
            services {
              title {
                text
              }
              content {
                html
              }
            }
          }
        }
        allPrismicProducts(limit: 3) {
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
        allShopifyProduct {
          nodes {
            legacyResourceId
            variants {
              price
              compareAtPrice
            }
          }
        }
      }
    `)
  return {
    quote: prismicHome.data.quote[0],
    about: prismicHome.data.about,
    services: prismicHome.data.services,
    products: allPrismicProducts.nodes.map(product => {
      const shopifyProduct = allShopifyProduct.nodes.find(
        node => node.legacyResourceId === product.data.product_id.text
      )
      return {
        ...product,
        shopifyProduct,
      }
    }),
  }
}

export default useHomepage
