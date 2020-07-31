import React from "react"
import { graphql } from "gatsby"

const Project = ({ data: { prismicProjects: project } }) => {
  console.log(project)
  return (
    <div>
      <h1>{project.data.title.text}</h1>
    </div>
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
      }
    }
  }
`
