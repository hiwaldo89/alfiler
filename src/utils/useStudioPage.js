import { graphql, useStaticQuery } from "gatsby"

const useStudioPage = () => {
  const { prismicStudio } = useStaticQuery(graphql`
    {
      prismicStudio {
        data {
          manifesto {
            title {
              text
            }
            column_2 {
              html
            }
            column_1 {
              html
            }
          }
          team_members {
            bio {
              html
            }
            bio_2 {
              html
            }
            job_position {
              text
            }
            photo {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            hover_photo {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            name {
              text
            }
          }
          our_day_to_day {
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
  return {
    manifesto: {
      title: prismicStudio.data.manifesto[0].title.text,
      column_1: prismicStudio.data?.manifesto[0]?.column_1?.html,
      column_2: prismicStudio.data?.manifesto[0]?.column_2?.html,
    },
    teamMembers: prismicStudio.data.team_members.map(member => ({
      name: member.name.text,
      jobPosition: member.job_position.text,
      bio: member.bio?.html || null,
      bio2: member.bio_2?.html || null,
      image: member.photo.fluid,
      hoverImage: member.hover_photo.fluid,
    })),
    gallery: prismicStudio.data.our_day_to_day.map(image => image.image.fluid),
  }
}

export default useStudioPage
