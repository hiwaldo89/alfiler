import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandingStudio from "../components/servicios/brandingStudio"
import BrandingStudioServices from "../components/servicios/brandingStudioServices"
import BrandingProjects from "../components/servicios/brandingProjects"
import WeddingBoutique from "../components/servicios/weddingBoutique"
import Faqs from "../components/servicios/faqs"
import useServiciosPage from "../utils/useServiciosPage"

const Servicios = () => {
  const {
    brandingStudio,
    brandingStudioServicios,
    brandingProjects,
    weddingBoutique,
    weddingBoutiqueProject,
    faqs,
  } = useServiciosPage()
  console.log(weddingBoutique)
  return (
    <Layout>
      <SEO title="Servicios" />
      <h1 className="sr-only">Servicios</h1>
      <BrandingStudio brandingStudio={brandingStudio} />
      <BrandingStudioServices services={brandingStudioServicios} />
      <BrandingProjects projects={brandingProjects} />
      <WeddingBoutique
        weddingBoutique={weddingBoutique}
        project={weddingBoutiqueProject[0]}
      />
      <Faqs faqs={faqs} />
    </Layout>
  )
}

export default Servicios
