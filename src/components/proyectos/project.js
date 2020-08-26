import React, { useState } from "react"
import HoverableComponent from "../../hocs/HoverableComponent"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Project = ({ project, ...props }) => {
  return (
    <div {...props}>
      {/* <div
        data-sal="fade"
        data-sal-duration="350"
        data-sal-delay="300"
        className={animated ? "sal-animate" : ""}
      > */}
      <Link to={`/proyectos/${project.slug}`} className="project-wrapper">
        <div className="project">
          <Img
            fluid={project.image}
            alt={project.title}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
            }}
          />
        </div>
        <div className="project__info">
          {project.categoryTitle && <span>{project.categoryTitle[0]}</span>}
          <h3>{project.title}</h3>
        </div>
      </Link>
      {/* </div> */}
    </div>
  )
}

export default HoverableComponent(Project)
