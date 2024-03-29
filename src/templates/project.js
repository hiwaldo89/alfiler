import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import TwoColImg from "../components/proyecto/twoColImage"
import TextBlock from "../components/proyecto/textBlock"
import HighlightText from "../components/proyecto/highlightText"
import TwoColText from "../components/proyecto/twoColText"
import FullWidthImg from "../components/proyecto/fullWidthImg"
import TextWithImg from "../components/proyecto/textWithImg"
import Columns from "../components/proyecto/columns"
import AccordionColumns from "../components/proyecto/accordionColumns"
import { colors } from "../utils/colors"
import { Link } from "gatsby"

const Project = ({ data: { prismicProjects: project } }) => {
  return (
    <Layout>
      <SEO
        title={project.data.title.text}
        description={project.data?.meta_description?.text || ""}
        meta={[
          { property: "og:image", content: project.data?.cover_image?.url },
        ]}
      />
      <h1 className="sr-only">{project.data.title.text}</h1>
      <div
        css={css`
          position: relative;
          &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            height: 70%;
            width: 100%;
            z-index: -1;
            background-color: ${colors.lightgray};
          }
          & > div {
            &:first-of-type {
              padding-top: 4rem;
            }
            padding-bottom: 6rem;
          }
        `}
      >
        {project.data.body.map((slice, index) => {
          switch (slice.slice_type) {
            case "two_column_image":
              return <TwoColImg key={slice.id} content={slice.primary} />
            case "text_block":
              return <TextBlock key={slice.id} content={slice.primary} />
            case "hightlight_text":
              return <HighlightText key={slice.id} content={slice.primary} />
            case "two_column_text":
              return <TwoColText key={slice.id} content={slice.primary} />
            case "full_width_image":
              return <FullWidthImg key={slice.id} content={slice.primary} />
            case "text_with_image":
              return <TextWithImg key={slice.id} content={slice.primary} />
            case "columns":
              return (
                <Columns key={slice.id} content={slice.items} id={slice.id} />
              )
            case "accordion_columns":
              return (
                <AccordionColumns
                  key={slice.id}
                  content={slice.items}
                  id={slice.id}
                />
              )
            default:
              return <div key={`slice-${index}`}>No block defined</div>
          }
        })}
      </div>
      <div className="container text-center">
        <Link
          to="/proyectos"
          css={css`
            border: solid 1px #000;
            padding: 0.8rem 1.8rem;
            display: inline-block;
            margin-bottom: 6rem;
            color: inherit;
            transition: all 0.3s ease-in-out;
            &:hover {
              color: #fff;
              background-color: #000;
            }
          `}
        >
          Ver más proyectos
        </Link>
      </div>
    </Layout>
  )
}

export default Project

export const PageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProjects(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        cover_image {
          url
        }
        body {
          ... on PrismicProjectsDataBodyTwoColumnImage {
            id
            slice_type
            primary {
              left_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              right_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
          ... on PrismicProjectsDataBodyTextBlock {
            id
            slice_type
            primary {
              title1 {
                raw
              }
              content {
                text
              }
            }
          }
          ... on PrismicProjectsDataBodyHightlightText {
            id
            slice_type
            primary {
              text {
                raw
              }
              alignment
              sub_heading {
                html
              }
              subheading_alignment
            }
          }
          ... on PrismicProjectsDataBodyTwoColumnText {
            id
            slice_type
            primary {
              title1 {
                text
              }
              left_column_text {
                html
              }
              right_column_text {
                html
              }
            }
          }
          ... on PrismicProjectsDataBodyFullWidthImage {
            id
            slice_type
            primary {
              image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
                alt
              }
            }
          }
          ... on PrismicProjectsDataBodyTextWithImage {
            id
            slice_type
            primary {
              text {
                html
              }
              image {
                alt
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
          ... on PrismicProjectsDataBodyColumns {
            id
            slice_type
            items {
              column_content {
                html
              }
            }
          }
          ... on PrismicProjectsDataBodyAccordionColumns {
            id
            slice_type
            items {
              title1 {
                text
              }
              content {
                html
              }
            }
          }
        }
      }
    }
  }
`
