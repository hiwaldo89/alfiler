import { useStaticQuery, graphql } from "gatsby"

const useHomepage = () => {
  const { prismicHome } = useStaticQuery(graphql`
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
    }
  `)
  return {
    quote: prismicHome.data.quote[0],
    about: prismicHome.data.about,
    services: prismicHome.data.services,
  }
}

export default useHomepage
