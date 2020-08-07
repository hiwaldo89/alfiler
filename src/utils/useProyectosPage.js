import { useStaticQuery, graphql } from "gatsby"

const useProyectosPage = () => {
  const { allPrismicProjects, allPrismicResenas } = useStaticQuery(graphql`
    {
      allPrismicProjects {
        nodes {
          data {
            title {
              text
            }
            category {
              category1 {
                uid
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
    }
  `)
  return {
    projects: allPrismicProjects.nodes.map(project => ({
      title: project.data.title.text,
      category: project.data.category.map(category => category.category1.uid),
      slug: project.uid,
      image: project.data.cover_image.fluid,
    })),
    quotes: allPrismicResenas.nodes.map(quote => ({
      id: quote.id,
      name: quote.data.nombre.text,
      project: {
        title: quote.data.proyecto.document.data.title.text,
        slug: quote.data.proyecto.uid,
      },
      content: quote.data.resena.text,
    })),
  }
}

export default useProyectosPage
