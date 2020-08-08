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
    console.log(slickSlider.current)
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
  }

  return (
    <div
      css={css`
        padding-bottom: 122px;
        background-color: ${colors.lightgray};
        h2 {
          font-weight: 300;
          font-size: 2.5rem;
          margin-top: 0;
          padding-top: 3rem;
        }
        .slider-wrapper {
          overflow: visible;
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
          @media (min-width: 992px) {
            margin-right: calc(50vw - 465px);
            ${!movedSlider && "clip-path: inset(0 -50vw 0 0);"}
          }
          @media (min-width: 1200px) {
            margin-right: calc(50vw - 555px);
          }
        }
        .slick-slide {
          padding-left: 25px;
          padding-right: 25px;
          opacity: 0.5;
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
          width: 40%;
          h3 {
            width: 50%;
          }
          h4 {
            font-size: 1.17em;
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
            <div key={`member-${index}`} onClick={() => changeSlide(index)}>
              <Img
                fluid={member.image}
                alt={member.name}
                imgStyle={{
                  opacity: 1,
                }}
                placeholderStyle={{
                  opacity: 0,
                }}
              />
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
                  <p>{member.bio}</p>
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
