/**
 * HomeContent component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

import HeroSVGS from './heroSVGS'

const HomeContent = () => {
    
  const data = useStaticQuery(graphql`
  query {
    site {
        siteMetadata {
            accouncement_text
            social {
                names
                links
                colors
            }
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
          html
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
    
    <Content>

        <div id="heroSVGS">
            
            <HeroSVGS></HeroSVGS>

        </div>
         
      
        <Section id="mainSection">
          <Container>
            <section dangerouslySetInnerHTML={{ __html: content.html }} />
          </Container>
        
        </Section>
    </Content>
  )
}

export default HomeContent
