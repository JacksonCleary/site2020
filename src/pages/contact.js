import React from "react"
import { graphql } from "gatsby"

import "../styles/styles.sass"

import ContactContent from "../components/contactContent"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <ContactContent />
    </Layout>
  )
}

export default ContactIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
