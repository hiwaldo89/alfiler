import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/homepage/quote"
import About from "../components/homepage/about"
import RecentProjects from "../components/recentProjects"
import OurServices from "../components/homepage/ourServices"
import StorePreview from "../components/storePreview"
import useHomepage from "../utils/useHomepage"

const HomePage = () => {
  const { quote, about, services, products } = useHomepage()
  console.log(products)
  return (
    <Layout>
      <SEO title="Inicio" />
      <h1 className="sr-only">Alfiler Branding Studio</h1>
      {quote && <Quote quote={quote} />}
      {about && <About blocks={about} />}
      <RecentProjects featured />
      <StorePreview products={products} title="Productos de nuestra tienda" />
      <OurServices services={services} />
    </Layout>
  )
}

export default HomePage
