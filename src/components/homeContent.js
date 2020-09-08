/**
 * HomeContent component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import MaskSVG from './maskSVG'

const HomeContent = () => {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const width = document.getElementById('firstMask').clientWidth;
        const height = document.getElementById('firstMask').clientHeight;
        setHeight(height)
        setWidth(width)
    });
    
  const data = useStaticQuery(graphql`
  query {
    site {
        siteMetadata {
            accouncement_text
        }
      }
    content: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(content)/(collection)/(pages)/(home)/"}}
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
  const content = data.content.edges[0].node
  const metaData = data.site.siteMetadata
  return (
    <div>
       
        <div id="firstMask" className="maskContainer">
            <MaskSVG 
                accouncement_text={metaData.accouncement_text}
                parent_width={width}
                parent_height={height}
            ></MaskSVG>
        </div>
      
      {/* <p
        dangerouslySetInnerHTML={{
        __html: content.excerpt,
        }}
        /> */}
    </div>
  )
}

export default HomeContent
