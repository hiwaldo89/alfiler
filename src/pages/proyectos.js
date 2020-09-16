import React from "react"
import Layout from "../components/layout"
import ProjectGrid from "../components/proyectos/projectGrid"
import Quotes from "../components/proyectos/quotes"
import OurServices from "../components/proyectos/ourServices"
import SEO from "../components/seo"
import useProyectosPage from "../utils/useProyectosPage"

const Proyectos = () => {
  const { projects, quotes, categories } = useProyectosPage()
  return (
    <Layout>
      <SEO
        title="Proyectos"
        description="Conoce nuestra manera de moldear ideas en marcas únicas e irrepetibles a través de procesos estratégicos y creativos."
      />
      <h1 className="sr-only">Proyectos</h1>
      <ProjectGrid projects={projects} categories={categories} />
      <Quotes quotes={quotes} />
      <OurServices />
    </Layout>
  )
}

export default Proyectos
