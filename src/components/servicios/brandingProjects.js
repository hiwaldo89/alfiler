import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { colors } from "../../utils/colors"

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
            <div key={project.id} className="project">
              <Link to={`/proyectos/${project.slug}`}>
                <div className="project-img">
                  <Img
                    fluid={project.image}
                    style={
                      index === 0
                        ? {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                          }
                        : {}
                    }
                    alt={project.title}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandingProjects
