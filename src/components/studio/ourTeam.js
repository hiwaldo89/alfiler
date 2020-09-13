import React, { useState, useRef } from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"
import "slick-carousel/slick/slick.css"

const OurTeam = ({ members }) => {
  const [activeMember, setActiveMember] = useState(0)
  const [movedSlider, setMovedSlider] = useState(false)
  const slickSlider = useRef(null)
  const changeSlide = index => {
    slickSlider.current.slickGoTo(index, null)
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    swipe: false,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setActiveMember(newIndex)
      if (!movedSlider) {
        setMovedSlider(true)
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div
      css={css`
        padding-bottom: 122px;
        background-color: ${colors.lightgray};
        h2 {
          font-weight: 300;
          font-size: 2rem;
          margin-top: 0;
          padding-top: 3rem;
          @media (min-width: 768px) {
            font-size: 2.5rem;
          }
        }
        .slider-wrapper {
          overflow: hidden;
          @media (min-width: 992px) {
            padding-left: calc(50vw - 465px);
          }
          @media (min-width: 1200px) {
            padding-left: calc(50vw - 555px);
          }
        }
        .slick-list {
          overflow: visible;
          margin-left: -25px;
          margin-right: 80px;
          @media (min-width: 992px) {
            margin-right: calc(50vw - 465px);
            ${!movedSlider && "clip-path: inset(0 -50vw 0 0);"}
          }
          @media (min-width: 1200px) {
            margin-right: calc(50vw - 555px);
          }
        }
        .slick-slide {
          opacity: 0.5;
          padding-left: 10px;
          padding-right: 10px;
          @media (min-width: 768px) {
            padding-left: 25px;
            padding-right: 25px;
          }
          &.slick-active {
            opacity: 1;
          }
        }
        .photo {
          width: 100%;
          background-color: lightblue;
          &:after {
            content: "";
            display: block;
            padding-top: 100%;
          }
        }
        .member-info {
          width: 100%;
          h3 {
            width: 50%;
            margin-top: 2.5rem;
          }
          h4 {
            font-size: 1.17em;
            margin-top: 1rem;
          }
          p {
            line-height: 1.8;
          }
          .bio-wrapper {
            margin-left: -15px;
            margin-right: -15px;
          }
          .bio-col {
            width: 100%;
            flex: 0 0 100%;
            padding-left: 15px;
            padding-right: 15px;
            @media (min-width: 768px) {
              width: 45%;
              flex: 0 0 45%;
            }
            &:last-of-type {
              margin-left: auto;
            }
            a {
              color: inherit;
              text-decoration: underline;
            }
          }
        }
        .member {
          position: relative;
          .member__hoverimg {
            z-index: 2;
            opacity: 0;
            transition: all 0.3s ease-in-out;
          }
          &:hover {
            .member__hoverimg {
              opacity: 1;
            }
          }
        }
      `}
    >
      <div className="container">
        <h2 data-sal="slide-up" data-sal-duration="350">
          Our team
        </h2>
      </div>
      <div className="slider-wrapper">
        <Slider {...settings} ref={slickSlider}>
          {members.map((member, index) => (
            <div
              key={`member-${index}`}
              onClick={() => changeSlide(index)}
              className="member"
            >
              <Img
                fluid={member.image}
                alt={member.name}
                imgStyle={{
                  opacity: 1,
                }}
                placeholderStyle={{
                  opacity: 0,
                }}
                className="member__img"
              />
              {member.hoverImage && (
                <Img
                  fluid={member.hoverImage}
                  alt={member.name}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  imgStyle={{ opacity: 1 }}
                  placeholderStyle={{ opacity: 0 }}
                  className="member__hoverimg"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className="member-info">
          {members.map((member, index) => {
            return (
              activeMember === index && (
                <div key={`member-info-${index}`}>
                  <h3>{member.jobPosition}</h3>
                  <h4>{member.name}</h4>
                  <div className="d-flex bio-wrapper">
                    <div className="bio-col">
                      <div
                        dangerouslySetInnerHTML={{ __html: member.bio }}
                      ></div>
                    </div>
                    <div
                      className="bio-col"
                      dangerouslySetInnerHTML={{ __html: member.bio2 }}
                    ></div>
                  </div>
                </div>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
