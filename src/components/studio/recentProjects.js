import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useRecentProjects from "../../utils/useRecentProjects"
import { css } from "@emotion/core"

const RecentProjects = () => {
  const projects = useRecentProjects().slice(0, 2)
  const [focusedProject, setFocusedProject] = useState(null)
  return (
    <div
      className="container"
      css={css`
        margin-bottom: 128px;
        h2 {
          text-align: right;
          font-size: 2.5rem;
          line-height: 1.4;
          margin-bottom: 80px;
          span {
            text-align: left;
            display: inline-block;
          }
        }
        h3 {
          line-height: 1.2em;
          margin-bottom: 60px;
          font-weight: 300;
          font-size: 2rem;
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
                  .project-info {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .project-info {
          background-color: #000000;
          color: #fff;
          padding: 18px 24px;
          opacity: 0;
          transition: all 0.3s ease-in-out;
          transform: translateY(-50px);
          h3,
          p {
            margin: 0;
          }
          h3 {
            margin-bottom: 1.5rem;
          }
        }
      `}
    >
      <h2 data-sal="slide-up" data-sal-duration="350" data-sal-delay="300">
        <span>
          Chasing whys <br />
          and hows
        </span>
      </h2>
      <div className="d-flex">
        <div>
          <h3>Proyectos recientes</h3>
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
              className={`project${index === focusedProject ? " focused" : ""}`}
              key={`recent-project-${project.node.uid}`}
            >
              <div data-sal="slide-left" data-sal-duration="350">
                <Link to={`/proyectos/${project.node.uid}`}>
                  <Img fluid={project.node.data.cover_image.fluid} />
                  <div className="project-info">
                    <h3>{project.node.data.title.text}</h3>
                    <p>Ver proyecto</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
