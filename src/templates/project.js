import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import TwoColImg from "../components/proyecto/twoColImage"
import TextBlock from "../components/proyecto/textBlock"
import HighlightText from "../components/proyecto/highlightText"
import TwoColText from "../components/proyecto/twoColText"
import FullWidthImg from "../components/proyecto/fullWidthImg"
import TextWithImg from "../components/proyecto/textWithImg"
import Columns from "../components/proyecto/columns"
import { colors } from "../utils/colors"

const Project = ({ data: { prismicProjects: project } }) => {
  return (
    <Layout>
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
          console.log(slice)
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
            default:
              return <div key={`slice-${index}`}>No block defined</div>
          }
        })}
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
        body {
          ... on PrismicProjectsBodyTwoColumnImage {
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
          ... on PrismicProjectsBodyTextBlock {
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
          ... on PrismicProjectsBodyHightlightText {
            id
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicProjectsBodyTwoColumnText {
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
          ... on PrismicProjectsBodyFullWidthImage {
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
          ... on PrismicProjectsBodyTextWithImage {
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
          ... on PrismicProjectsBodyColumns {
            id
            slice_type
            items {
              column_content {
                html
              }
            }
          }
        }
      }
    }
  }
`
