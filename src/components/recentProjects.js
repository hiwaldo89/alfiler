import React from "react"
import useRecentProjects from "../utils/useRecentProjects"
import { css } from "@emotion/core"
import Project from "./project"

const RecentProjects = ({ limit = 4 }) => {
  const projects = useRecentProjects().slice(0, limit) || []
  return (
    <div
      className="container"
      css={css`
        margin-bottom: 128px;
        margin-top: 128px;
        h2 {
          line-height: 1.2em;
          margin-bottom: 60px;
          font-weight: 300;
          font-size: 2rem;
        }
        h3 {
          font-size: 1.2rem;
          font-weight: 300;
        }
        .project {
          width: 45%;
          flex: 0 0 45%;
          margin-bottom: 3.5rem;
          &:nth-of-type(even) {
            margin-left: auto;
          }
          &__info {
            color: #000;
            span {
              font-weight: 300;
              display: inline-block;
              margin-top: 1.5rem;
            }
            h3 {
              margin: 0;
              font-weight: 400;
              margin-top: 0.5rem;
            }
          }
        }
      `}
    >
      <h2 data-sal="slide-up" data-sal-duration="350" data-sal-delay="300">
        Proyectos recientes
      </h2>
      <div className="d-flex">
        {projects.map(project => (
          <Project project={project} key={project.node.id} />
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
