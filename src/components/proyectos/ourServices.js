import React from "react"
import { css } from "@emotion/react"
import ServicesBlock from "../servicesBlock"
import useHomepage from "../../utils/useHomepage"

const OurServices = () => {
  const { services } = useHomepage()
  return (
    <div
      className="container"
      css={css`
        padding-top: 5rem;
        padding-bottom: 5rem;
      `}
    >
      <ServicesBlock services={services} />
    </div>
  )
}

export default OurServices
