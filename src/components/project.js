import React from "react"
import HoverableComponent from "../hocs/HoverableComponent"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Project = ({ project, ...props }) => {
  return (
    project && (
      <div className="project" {...props}>
        <div data-sal="slide-up" data-sal-duration="350">
          <Link to={`/proyectos/${project.node.uid}`}>
            {project.node.data.cover_image.fluid && (
              <Img fluid={project.node?.data?.cover_image?.fluid} />
            )}
            {project.node.data.category.length && (
              <div className="project__info">
                {project.node.data.category.length && (
                  <span>
                    {project.node.data.category[0].category1.document.data.name}
                  </span>
                )}
                <h3>{project.node.data.title.text || ""}</h3>
              </div>
            )}
          </Link>
        </div>
      </div>
    )
  )
}

export default HoverableComponent(Project)
