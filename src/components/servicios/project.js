import React from "react"
import HoverableComponent from "../../hocs/HoverableComponent"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Project = ({ project, index, ...props }) => {
  return (
    <div className="project" {...props}>
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
  )
}

export default HoverableComponent(Project)
