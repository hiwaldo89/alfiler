import React, { useState, useRef } from "react"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"
import useCategories from "../../utils/useCategories"
import Project from "./project"
import Fade from "react-reveal"

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
            &.active {
              font-weight: 700;
            }
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
        .project-wrapper {
          margin-bottom: 2.5rem;
          display: block;
        }
        .project {
          background-color: lightgray;
          display: block;
          position: relative;
          &:after {
            content: "";
            display: block;
            padding-top: 100%;
          }
          &__info {
            color: #000;
            span {
              font-weight: 300;
              display: inline-block;
              margin-top: 1.5rem;
            }
            h3 {
              margin: 0;
              font-weight: 400;
              margin-top: 0.5rem;
            }
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
            className={filterBy.current === "" ? "active" : ""}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => {
                filterProjects(category.slug)
              }}
              className={filterBy.current === category.slug ? "active" : ""}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="d-flex">
          {allProjects.length > 0 ? (
            allProjects.slice(0, itemsPerPage).map(project => (
              <Fade key={project.slug}>
                <Project project={project} />
              </Fade>
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
