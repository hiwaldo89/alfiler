import React from "react"
import { css } from "@emotion/core"
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
            width: 65%;
            flex: 0 0 65%;
            .project-img {
              &:after {
                content: "";
                display: block;
                padding-top: 52%;
              }
            }
          }
          &:nth-of-type(2) {
            width: 35%;
            flex: 0 0 35%;
          }
          .project-img {
            position: relative;
          }
        }
      `}
    >
      <div className="container">
        <div className="d-flex">
          {projects.map((project, index) => (
            <Project project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandingProjects
