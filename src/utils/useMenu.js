import { useStaticQuery, graphql } from "gatsby"

const useMenu = () => {
  const data = useStaticQuery(graphql`
    {
      prismicMenu {
        id
        data {
          menu_item {
            titulo {
              text
            }
            link {
              text
            }
            external
            content {
              text
            }
            image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  `)
  return data
  //   return prismic.allMenus.edges[0].node.body.map(slice => {
  //     const content = {}
  //     if (slice.fields) {
  //       content["fields"] = slice.fields
  //     }
  //     if (slice.primary) {
  //       content["primary"] = slice.primary
  //     }
  //     return {
  //       type: slice.type,
  //       ...content,
  //     }
  //   })
}

export default useMenu
