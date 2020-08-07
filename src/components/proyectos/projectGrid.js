import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"
import useCategories from "../../utils/useCategories"

const ProjectGrid = ({ projects }) => {
  const items = 9

  const [allProjects, setAllProjects] = useState([...projects])
  const [itemsPerPage, setItemsPerPage] = useState(items)

  // Projects pagination
  const loadMore = () => {
    setItemsPerPage(itemsPerPage + items)
  }

  // Categories
  let filterBy = useRef("")
  const categories = useCategories()

  const filterProjects = filter => {
    if (filter !== filterBy.current) {
      setItemsPerPage(items)
      filterBy.current = filter
      if (filter !== "") {
        setAllProjects(
          projects.filter(project => project.category.includes(filter))
        )
      } else {
        setAllProjects([...projects])
      }
    }
  }

  return (
    <div
      css={css`
        background-color: ${colors.lightgray};
        padding-bottom: 100px;
        .filters {
          text-align: center;
          padding-top: 100px;
          margin-bottom: 80px;
          button {
            margin: 0 30px;
            background: transparent;
            border: none;
          }
        }
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            width: 33.3333333%;
            flex: 0 0 33.3333333%;
          }
          h3 {
            margin: auto;
          }
        }
        .project {
          background-color: lightgray;
          display: block;
          margin-bottom: 30px;
          position: relative;
          &:after {
            content: "";
            display: block;
            padding-top: 100%;
          }
          &:hover {
            .project-title {
              opacity: 1;
            }
          }
          .project-title {
            background: rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.3s ease-in-out;
          }
        }
        .load-more {
          text-align: center;
          button {
            background: transparent;
            border: none;
          }
        }
      `}
    >
      <div className="container">
        <div className="filters">
          <button
            onClick={() => {
              filterProjects("")
            }}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => {
                filterProjects(category.slug)
              }}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="d-flex">
          {allProjects.length > 0 ? (
            allProjects.slice(0, itemsPerPage).map(project => (
              <div key={project.slug}>
                <Link to={`/proyectos/${project.slug}`} className="project">
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
                  <div className="project-title">
                    <h3>{project.title}</h3>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h3>Lo sentimos, no hay proyectos con esa categoría</h3>
          )}
        </div>
        {allProjects.length > itemsPerPage && (
          <div className="load-more">
            <button type="button" onClick={loadMore}>
              Más proyectos
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectGrid
