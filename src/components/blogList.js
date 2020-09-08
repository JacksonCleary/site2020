import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Columns from 'react-bulma-components/lib/components/columns';

import BlogListSingle from './blogListSingle'

const BlogList = () => {
    const data = useStaticQuery(graphql`
        query {
            blog: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/(content)/(collection)/(blog)/"}}
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        excerpt
                        fields {
                            slug
                            parentSlug
                        }
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            title
                            description
                        }
                    }
                }
            }
        }
    `)
    const posts = data.blog.edges
  return (
        <Columns className="blogList" style={{
            alignItems: `center`,
        }}>   
        {posts.map(({ node }) => {
            return (
                  
                <BlogListSingle key={node.fields.slug} node={node}></BlogListSingle>
                
            )
        }
      )}
      </Columns>
  )
}

export default BlogList
