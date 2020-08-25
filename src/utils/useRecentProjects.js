import { useStaticQuery, graphql } from "gatsby"

const useRecentProjects = () => {
  const { allPrismicProjects } = useStaticQuery(graphql`
    {
      allPrismicProjects(limit: 4) {
        edges {
          node {
            uid
            id
            data {
              title {
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

export default useRecentProjects
