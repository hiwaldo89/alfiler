const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProjects {
        edges {
          node {
            id
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/project.js")

  pages.data.allPrismicProjects.edges.forEach(edge => {
    createPage({
      path: `/proyectos/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
