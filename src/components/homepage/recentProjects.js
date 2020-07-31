import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"
import useRecentProjects from "../../utils/useRecentProjects"

const RecentProjects = () => {
  const projects = useRecentProjects()
  const [focusedProject, setFocusedProject] = useState(null)

  return (
    <div
      css={css`
        position: relative;
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 80%;
          background-color: ${colors.lightgray};
          z-index: -1;
        }
        h2 {
          font-size: 50px;
          line-height: 1.2em;
          font-weight: 700;
          margin: 0;
          margin-bottom: 106px;
        }
        h3 {
          line-height: 1.2em;
          margin-bottom: 60px;
        }
        .d-flex {
          & > div {
            &:nth-of-type(1) {
              width: 40%;
              flex: 0 0 40%;
              ul {
                list-style: none;
                padding: 0;
                margin: 0;
                li {
                  margin-bottom: 1em;
                  &:before {
                    content: "-";
                    display: inline-block;

                    margin-right: 10px;
                  }
                }
                a {
                  font-weight: 300;
                  color: inherit;
                }
              }
            }
            &:nth-of-type(2) {
              width: 60%;
              flex: 0 0 60%;
              display: flex;
              flex-wrap: wrap;
              margin-left: auto;
              margin-right: -22px;

              .project {
                width: 50%;
                flex: 0 0 50%;
                margin-bottom: 39px;
                padding-left: 22px;
                padding-right: 22px;
                filter: grayscale(1);
                transition: all 0.3s ease-in-out;
                &.focused,
                &:hover {
                  filter: grayscale(0);
                }
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      `}
    >
      <div className="container">
        <h2>
          Chasing whys <br /> and hows
        </h2>
        <div className="d-flex">
          <div>
            <h3>
              Proyectos <br />
              recientes
            </h3>
            <ul>
              {projects.map((project, index) => (
                <li key={`recent-project-list-${project.node.uid}`}>
                  <Link
                    to={`/proyectos/${project.node.uid}`}
                    onMouseEnter={() => {
                      setFocusedProject(index)
                    }}
                    onMouseLeave={() => {
                      setFocusedProject(null)
                    }}
                  >
                    {project.node.data.title.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {projects.map((project, index) => (
              <div
                className={`project${
                  index === focusedProject ? " focused" : ""
                }`}
                key={`recent-project-${project.node.uid}`}
              >
                <Link to={`/proyectos/${project.node.uid}`}>
                  <Img fluid={project.node.data.cover_image.fluid} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
