import { useStaticQuery, graphql } from "gatsby"

const useCategories = () => {
  const { allPrismicCategory } = useStaticQuery(graphql`
    {
      allPrismicCategory {
        nodes {
          data {
            name
          }
          uid
        }
      }
    }
  `)
  return allPrismicCategory.nodes.map(category => ({
    title: category.data.name,
    slug: category.uid,
  }))
}

export default useCategories
