import React from "react"
import { graphql } from "gatsby"

import "../styles/styles.sass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkContent from "../components/workContent"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
     <WorkContent></WorkContent>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
