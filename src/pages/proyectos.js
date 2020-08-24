import React from "react"
import Layout from "../components/layout"
import ProjectGrid from "../components/proyectos/projectGrid"
import Quotes from "../components/proyectos/quotes"
import OurServices from "../components/proyectos/ourServices"
import SEO from "../components/seo"
import useProyectosPage from "../utils/useProyectosPage"

const Proyectos = () => {
  const { projects, quotes } = useProyectosPage()
  return (
    <Layout>
      <SEO title="Proyectos" />
      <h1 className="sr-only">Proyectos</h1>
      <ProjectGrid projects={projects} />
      <Quotes quotes={quotes} />
      <OurServices />
    </Layout>
  )
}

export default Proyectos
