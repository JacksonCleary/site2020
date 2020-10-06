import { useStaticQuery, graphql } from "gatsby"

// outside sorting into groups will be used since grouping and sorting inside Gatsby isn't a feature yet:
// https://github.com/gatsbyjs/gatsby/issues/17690
// refer to components/utility/ArrayFunctions for patch
const ProjectsHook = () => {
    const data = useStaticQuery(graphql`
        query {
            content: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/(content)/(collection)/(projects)/"}}
                sort: {
                    fields: frontmatter___title
                    order: ASC
                  }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
                        }
                    }
                }
            }
        }
    `)
  
    return data
  }
  
  export default ProjectsHook