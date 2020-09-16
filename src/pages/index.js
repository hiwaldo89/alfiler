import React from "react"
import ComingSoon from "../images/coming-soon.inline.svg"
import { css } from "@emotion/core"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Quote from "../components/homepage/quote"
// import About from "../components/homepage/about"
// import RecentProjects from "../components/recentProjects"
// import OurServices from "../components/homepage/ourServices"
// import useHomepage from "../utils/useHomepage"

const HomePage = () => {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .art {
          width: 250px;
          height: auto;
          max-width: 80%;
        }
      `}
    >
      <SEO title="Coming Soon" />
      <ComingSoon className="art" />
    </div>
  )
  // const { quote, about, services } = useHomepage()
  // return (
  //   <Layout>
  //     <SEO title="Inicio" />
  //     <h1 className="sr-only">Alfiler Branding Studio</h1>
  //     {quote && <Quote quote={quote} />}
  //     {about && <About blocks={about} />}
  //     <RecentProjects featured />
  //     <OurServices services={services} />
  //   </Layout>
  // )
}

export default HomePage
