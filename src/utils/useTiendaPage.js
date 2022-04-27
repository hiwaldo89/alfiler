import { graphql, useStaticQuery } from "gatsby"

const useTiendaPage = () => {
  const {
    allPrismicProductCategory,
    prismicTienda,
    allShopifyProduct,
    allPrismicProducts,
  } = useStaticQuery(graphql`
    {
      allShopifyProduct(
        filter: {
          collections: { elemMatch: { title: { eq: "Página de inicio" } } }
        }
      ) {
        nodes {
          legacyResourceId
          title
          variants {
            compareAtPrice
            price
          }
          totalInventory
          tracksInventory
        }
      }
      allPrismicProducts {
        nodes {
          data {
            category {
              slug
            }
            product_id {
              text
            }
            product_images {
              image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
            product_description {
              content {
                text
              }
            }
          }
        }
      }
      allPrismicProductCategory {
        nodes {
          uid
          data {
            title {
              text
            }
          }
        }
      }
      prismicTienda {
        data {
          title {
            text
          }
          description {
            text
          }
          footer_images {
            image {
              alt
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  `)

  return {
    store: {
      title: prismicTienda.data.title.text,
      description: prismicTienda.data.description.text,
      footerImages: prismicTienda.data.footer_images.map(image => ({
        fluid: image.image.fluid,
        alt: image.image.alt,
      })),
    },
    productCategories: allPrismicProductCategory.nodes.map(node => ({
      id: node.uid,
      title: node.data.title.text,
    })),
    products: allShopifyProduct.nodes.map(node => {
      const prismicProduct = allPrismicProducts.nodes.find(
        product =>
          product.data.product_id.text === node.legacyResourceId.toString()
      )

      return {
        id: node.legacyResourceId,
        title: node.title,
        category: prismicProduct.data.category.slug,
        image: prismicProduct.data.product_images[0].image.fluid,
        price: node.variants[0].price,
        compareAtPrice: node.variants[0].compareAtPrice,
        description: prismicProduct.data.product_description[0].content.text,
        outOfStock: node.tracksInventory && node.totalInventory === 0,
      }
    }),
  }
}

export default useTiendaPage
