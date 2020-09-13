import { useStaticQuery, graphql } from "gatsby"

const useFeaturedProjects = () => {
  const { allPrismicProjects } = useStaticQuery(graphql`
    {
      allPrismicProjects(
        limit: 4
        filter: {
          data: {
            category: { elemMatch: { category1: { slug: { eq: "featured" } } } }
          }
        }
      ) {
        edges {
          node {
            uid
            id
            data {
              title {
                text
              }
              fecha {
                text
              }
              lugar {
                text
              }
              cover_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              category {
                category1 {
                  document {
                    ... on PrismicCategory {
                      data {
                        name
                      }
                      id
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
  return allPrismicProjects.edges
}

export default useFeaturedProjects
