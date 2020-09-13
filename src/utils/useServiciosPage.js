import { graphql, useStaticQuery } from "gatsby"

const useServiciosPage = () => {
  const {
    prismicServicios,
    allPrismicProjects,
    weddingBoutiqueProject,
  } = useStaticQuery(graphql`
    {
      prismicServicios {
        data {
          branding_studio {
            branding_studio_title {
              text
            }
            content {
              text
            }
          }
          medidas {
            title1 {
              text
            }
            content {
              text
            }
          }
          confeccion {
            title1 {
              text
            }
            content {
              text
            }
          }
          accesorios {
            title1 {
              text
            }
            content {
              text
            }
          }
          wedding_boutique {
            title1 {
              text
            }
            content {
              text
            }
          }
          wedding_boutique_services {
            title1 {
              text
            }
          }
          faqs {
            question {
              text
            }
            answer {
              text
            }
          }
        }
      }
      allPrismicProjects(
        filter: {
          data: {
            category: {
              elemMatch: { category1: { slug: { ne: "wedding-boutique" } } }
            }
          }
        }
        limit: 2
        sort: { order: DESC, fields: data___fecha___text }
      ) {
        edges {
          node {
            id
            uid
            data {
              cover_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              title {
                text
              }
            }
          }
        }
      }
      weddingBoutiqueProject: allPrismicProjects(
        filter: {
          data: {
            category: {
              elemMatch: { category1: { slug: { eq: "wedding-boutique" } } }
            }
          }
        }
        limit: 1
        sort: { order: DESC, fields: first_publication_date }
      ) {
        edges {
          node {
            id
            uid
            data {
              cover_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              title {
                text
              }
            }
          }
        }
      }
    }
  `)
  return {
    brandingStudio: {
      title:
        prismicServicios.data.branding_studio[0].branding_studio_title.text,
      content: prismicServicios.data.branding_studio[0].content.text,
    },
    brandingStudioServicios: {
      medidas: prismicServicios.data.medidas.map(item => ({
        title: item.title1.text,
        content: item.content.text,
      })),
      confeccion: prismicServicios.data.confeccion.map(item => ({
        title: item.title1.text,
        content: item.content.text,
      })),
      accesorios: prismicServicios.data.accesorios.map(item => ({
        title: item.title1.text,
        content: item.content.text,
      })),
    },
    brandingProjects: allPrismicProjects.edges.map(project => ({
      id: project.node.id,
      slug: project.node.uid,
      title: project.node.data.title.text,
      image: project.node.data.cover_image.fluid,
    })),
    weddingBoutique: {
      title: prismicServicios.data.wedding_boutique[0].title1.text,
      content: prismicServicios.data.wedding_boutique[0].content.text,
      services: prismicServicios.data.wedding_boutique_services.map(
        service => service.title1.text
      ),
    },
    weddingBoutiqueProject: weddingBoutiqueProject.edges.map(project => ({
      id: project.node.id,
      slug: project.node.uid,
      title: project.node.data.title.text,
      image: project.node.data.cover_image.fluid,
    })),
    faqs: prismicServicios.data.faqs.map(faq => ({
      question: faq.question.text,
      answer: faq.answer.text,
    })),
  }
}

export default useServiciosPage
