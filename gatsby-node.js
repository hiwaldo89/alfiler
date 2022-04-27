const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProjects {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicProducts {
        edges {
          node {
            data {
              product_id {
                text
              }
              body {
                ... on PrismicProductsDataBodyVariant {
                  items {
                    product_id1 {
                      text
                    }
                  }
                }
                ... on PrismicProductsDataBodyVariantDropdown {
                  items {
                    product_id1 {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve("src/templates/project.js")
  const productTemplate = path.resolve("src/templates/product.js")

  pages.data.allPrismicProjects.edges.forEach(edge => {
    createPage({
      path: `/proyectos/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  pages.data.allPrismicProducts.edges.forEach(edge => {
    createPage({
      path: `/productos/${edge.node.data.product_id.text}`,
      component: productTemplate,
      context: {
        id: edge.node.data.product_id.text,
        addons: edge.node.data.body.reduce((addonsArr, currentItem) => {
          currentItem.items.forEach(variant => {
            addonsArr.push(variant.product_id1.text)
          })
          return addonsArr
        }, []),
      },
    })
  })
}
