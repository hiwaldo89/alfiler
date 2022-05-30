import React, { useRef } from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
import { css } from "@emotion/react"
import { colors } from "../../utils/colors"
import "slick-carousel/slick/slick.css"

const Quotes = ({ quotes }) => {
  const slickSlider = useRef(null)
  const settings = {
    arrows: false,
    fade: true,
    adaptiveHeight: true,
  }

  const goPrev = () => {
    slickSlider.current.slickPrev()
  }
  const goNext = () => {
    slickSlider.current.slickNext()
  }

  return (
    <div
      css={css`
        background-color: ${colors.lightgray};
        padding-bottom: 2rem;
        .d-flex {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            &:first-of-type {
              width: 100%;
              flex: 0 0 100%;
              @media (min-width: 768px) {
                width: 30%;
                flex: 0 0 30%;
                text-align: center;
              }
              h2 {
                text-align: center;
                font-size: 2.5rem;
                @media (min-width: 768px) {
                  text-align: left;
                  display: inline-block;
                }
              }
            }
            &:last-of-type {
              width: 100%;
              flex: 0 0 100%;
              @media (min-width: 768px) {
                width: 70%;
                flex: 0 0 70%;
              }
            }
          }
        }
        .quote {
          margin-left: -15px;
          margin-right: -15px;
          & > div {
            padding-left: 15px;
            padding-right: 15px;
            &:first-of-type {
              width: 100%;
              flex: 0 0 100%;
              text-align: center;
              line-height: 2;
              @media (min-width: 768px) {
                width: 57.15%;
                flex: 0 0 57.15%;
                text-align: left;
              }
            }
            &:last-of-type {
              text-align: center;
              @media (min-width: 768px) {
                width: 42.85%;
                flex: 0 0 42.85%;
              }
              & > div {
                text-align: center;
                @media (min-width: 768px) {
                  text-align: left;
                  display: inline-block;
                }
              }
            }
          }
          .quote-content {
            p:first-of-type {
              margin-top: 0;
              @media (min-width: 768px) {
                margin-bottom: 4rem;
              }
            }
          }
          .quote-project {
            p {
              font-weight: 700;
              font-size: 1.2rem;
              margin-top: 1.5rem;
              margin-bottom: 0.5rem;
            }
            h3 {
              margin: 0;
              font-weight: 300;
              margin-bottom: 4rem;
            }
            a {
              color: inherit;
            }
          }
        }
        .slider-controls {
          text-align: center;
          margin-top: 3rem;
          button {
            background-color: transparent;
            border: none;
            margin: 0 10px;
            &:active,
            &:focus {
              outline: none;
            }
          }
        }
      `}
    >
      <div className="container">
        <div className="d-flex">
          <div>
            <h2
              data-sal="slide-up"
              data-sal-duration="350"
              data-sal-delay="300"
            >
              Rumor <br /> has it
            </h2>
          </div>
          <div>
            <Slider {...settings} ref={slickSlider}>
              {quotes.map(quote => (
                <div key={quote.id}>
                  <div className="quote d-flex">
                    <div className="quote-content">
                      <p>{quote.content}</p>
                      <p>- {quote.name}</p>
                    </div>
                    <div className="quote-project">
                      <div>
                        <p>Proyecto</p>
                        <h3>{quote.project.title}</h3>
                        <Link to={`/proyectos/${quote.project.slug}`}>
                          Ver proyecto
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="slider-controls">
          <button type="button" onClick={goPrev}>{`<`}</button>
          <button type="button" onClick={goNext}>{`>`}</button>
        </div>
      </div>
    </div>
  )
}

export default Quotes
