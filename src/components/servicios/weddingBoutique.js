import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"

const WeddingBoutique = ({ weddingBoutique, project }) => {
  return (
    <div
      css={css`
        background-color: ${colors.lightgray};
        padding-bottom: 2rem;
        h2 {
          font-weight: 300;
          font-size: 2.5rem;
        }
        .about-service {
          line-height: 2rem;
          margin-bottom: 5rem;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          font-weight: 300;
          li {
            margin-bottom: 1rem;
            &:before {
              content: "-";
              display: inline-block;
              margin-right: 5px;
            }
          }
        }
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            width: 50%;
            flex: 0 0 50%;
          }
        }
        .project-info {
          background-color: #000000;
          color: #fff;
          padding: 18px 24px;
          opacity: 0;
          transition: all 0.3s ease-in-out;
          h3,
          p {
            margin: 0;
          }
          h3 {
            margin-bottom: 1.5rem;
          }
        }
        .wedding-project:hover {
          .project-info {
            opacity: 1;
          }
        }
      `}
    >
      <div className="container">
        <div className="d-flex">
          <div>
            <h2>{weddingBoutique.title}</h2>
            <p className="about-service">{weddingBoutique.content}</p>
            <ul>
              {weddingBoutique.services.map((service, index) => (
                <li key={`wb-service-${index}`}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <Link to={`/proyectos/${project.slug}`}>
              <div className="wedding-project">
                <Img fluid={project.image} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>Ver proyecto</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingBoutique
