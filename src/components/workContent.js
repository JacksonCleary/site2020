/**
 * WorkContent component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import BodyClassName from 'react-body-classname';

import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import DanielPortraitSVG from './danielPortraitSVG'
// import SocialIcons from './social'

const WorkContent = () => {
    
  const data = useStaticQuery(graphql`
  query {
    content: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(content)/(collection)/(pages)/(work)/"}}
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

  return (

    <BodyClassName className="work">
    
      <Content>         
          <Section id="mainSection">
            <Container>
              <Columns>
                <Columns.Column size={3} >
                  <DanielPortraitSVG></DanielPortraitSVG>
                </Columns.Column>
                <Columns.Column size={9} >
                  <section dangerouslySetInnerHTML={{ __html: content.html }} />
                </Columns.Column>

              </Columns>
            </Container>
          
          </Section>
      </Content>

    </BodyClassName>
  )
}

export default WorkContent
