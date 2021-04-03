import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import InfoBlock from '../components/Reusable/InfoBlock'
import DualInfoBlock from '../components/Reusable/DualInfoBlock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="About LearnCodeOnline"
    subtitle=""
    heroclass="about-background"
    />
    <DualInfoBlock 
    heading="A message from CEO"
    img="https://images.pexels.com/photos/2756844/pexels-photo-2756844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <InfoBlock heading="About Vison"/>
    <TeamPhotoSection heading="Meet the team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
