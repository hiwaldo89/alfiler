import React from "react"
import Layout from "../components/layout"
import OurManifesto from "../components/studio/ourManifesto"
import OurTeam from "../components/studio/ourTeam"
import OurDayToDay from "../components/studio/ourDayToDay"
import RecentProjects from "../components/recentProjects"
import SEO from "../components/seo"
import useStudioPage from "../utils/useStudioPage"

const Studio = () => {
  const { manifesto, teamMembers, gallery } = useStudioPage()
  return (
    <Layout>
      <SEO title="Studio" />
      <h1 className="sr-only">Studio</h1>
      <OurManifesto manifesto={manifesto} />
      <OurTeam members={teamMembers} />
      <OurDayToDay gallery={gallery} />
      <RecentProjects limit={2} />
    </Layout>
  )
}

export default Studio
