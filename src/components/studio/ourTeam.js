import React, { useState } from "react"
import Img from "gatsby-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { css } from "@emotion/core"
import { colors } from "../../utils/colors"
import "swiper/swiper.scss"

const OurTeam = ({ members }) => {
  const [activeMember, setActiveMember] = useState(0)
  const [movedSlider, setMovedSlider] = useState(false)
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
          overflow: hidden;
          @media (min-width: 992px) {
            padding-left: calc(50vw - 465px);
          }
          @media (min-width: 1200px) {
            padding-left: calc(50vw - 555px);
          }
        }
        .swiper-container {
          overflow: visible;
          @media (min-width: 992px) {
            margin-right: calc(50vw - 465px);
            ${!movedSlider && "clip-path: inset(0 -50vw 0 0);"}
          }
          @media (min-width: 1200px) {
            margin-right: calc(50vw - 555px);
          }
        }
        .swiper-slide {
          opacity: 0.5;
          &-visible {
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
        <h2>Our team</h2>
      </div>
      <div className="slider-wrapper">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          watchSlidesVisibility
          loop
          loopAdditionalSlides={1}
          onSlideChange={swiper => {
            setActiveMember(swiper.realIndex)
            if (!movedSlider && swiper.realIndex !== 0) {
              setMovedSlider(true)
            }
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={`member-${index}`}>
              <Img fluid={member.image} alt={member.name} />
            </SwiperSlide>
          ))}
        </Swiper>
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
