import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectContent from "../components/projectContent"

const ProjectIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.content
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects:" />
     <ProjectContent projects={projects}></ProjectContent>
    </Layout>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    content: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(content)/(collection)/(projects)/"}}
      sort: {
          fields: frontmatter___date
          order: ASC
        }
    ) {
        edges {
            node {
                id
                html
                frontmatter {
                    title
                    description
                    thumbs {
                      childImageSharp {
                        fluid(maxWidth: 750) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                    images {
                      childImageSharp {
                        fluid(maxWidth: 2000) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                }
            }
        }
    }
  }
`
