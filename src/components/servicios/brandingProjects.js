import React from "react"
import { css } from "@emotion/react"
import { colors } from "../../utils/colors"
import Project from "./project"

const BrandingProjects = ({ projects }) => {
  return (
    <div
      css={css`
        padding-bottom: 80px;
        background-color: ${colors.lightgray};
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
        }
        .project {
          padding-left: 15px;
          padding-right: 15px;
          &:hover {
            .project-info {
              opacity: 1;
            }
          }
          &:nth-of-type(1) {
            width: 100%;
            flex: 0 0 100%;
            margin-bottom: 2rem;
            @media (min-width: 768px) {
              width: 65%;
              flex: 0 0 65%;
              margin-bottom: 0;
            }
            .project-img {
              &:after {
                content: "";
                display: block;
                padding-top: 52%;
              }
            }
          }
          &:nth-of-type(2) {
            width: 100%;
            flex: 0 0 100%;
            @media (min-width: 768px) {
              width: 35%;
              flex: 0 0 35%;
            }
          }
          .project-img {
            position: relative;
          }
        }
      `}
    >
      <div className="container">
        <div className="d-flex">
          {projects.length &&
            projects.map((project, index) => (
              <Project project={project} index={index} key={project.id} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BrandingProjects
