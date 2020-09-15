import { useStaticQuery, graphql } from "gatsby"

const useProyectosPage = () => {
  const {
    allPrismicProjects,
    allPrismicResenas,
    prismicProjectsPage,
  } = useStaticQuery(graphql`
    {
      allPrismicProjects(sort: { fields: data___fecha___text, order: DESC }) {
        nodes {
          data {
            title {
              text
            }
            category {
              category1 {
                uid
                document {
                  ... on PrismicCategory {
                    data {
                      name
                    }
                  }
                }
              }
            }
            cover_image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
          uid
        }
      }
      allPrismicResenas(limit: 4) {
        nodes {
          id
          data {
            nombre {
              text
            }
            proyecto {
              uid
              document {
                ... on PrismicProjects {
                  data {
                    title {
                      text
                    }
                  }
                }
              }
            }
            resena {
              text
            }
          }
        }
      }
      prismicProjectsPage {
        data {
          category_menu {
            title {
              text
            }
            category {
              slug
            }
          }
        }
      }
    }
  `)
  return {
    projects: allPrismicProjects.nodes.map(project => ({
      title: project.data.title.text,
      category: project.data.category.map(category => category.category1.uid),
      categoryTitle: project.data.category.map(category =>
        category.category1.document ? category.category1.document.data.name : ""
      ),
      slug: project.uid,
      image: project.data.cover_image.fluid,
    })),
    quotes: allPrismicResenas.nodes.map(quote => ({
      id: quote.id,
      name: quote.data.nombre.text,
      project: {
        title: quote.data?.proyecto?.document?.data?.title?.text || "",
        slug: quote.data.proyecto.uid,
      },
      content: quote.data.resena.text,
    })),
    categories: prismicProjectsPage.data.category_menu.map(category => ({
      title: category.title.text,
      slug: category.category.slug,
    })),
  }
}

export default useProyectosPage
