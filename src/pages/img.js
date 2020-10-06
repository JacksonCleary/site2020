import React,  {useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const ImgIndex = ({ data, location }) => {

    useEffect(() => {}, []);

    const showImages = () => {
        const arr = []
        const imgs = Object.entries(data.allFile.edges)
        
        imgs.forEach(function(key) {
            arr.push(<img src={ key[1].node.childImageSharp.resize.src } />)
        })
        return arr
    }

    return (
        <Layout location={location}>
            { showImages() }
        </Layout>
    )
}

export default ImgIndex

export const pageQuery = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "assets"}, relativeDirectory: {eq: "thumbs"}}) {
      edges {
        node {
          childImageSharp {
            id
            resize(width: 750, height: 750, cropFocus: NORTH) {
                src
                width
                height
            }
          }
        }
      }
    }
  }
`
