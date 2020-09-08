import React from "react"
import { graphql } from "gatsby"

import "../styles/styles.sass"

import HomeContent from "../components/homeContent"
import BlogList from "../components/blogList"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <HomeContent />
      {/* <BlogList /> */}
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
