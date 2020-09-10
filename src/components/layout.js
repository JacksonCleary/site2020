import React from "react"
import { Link } from "gatsby"

import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

    header = (
      <h1>
        <Link to={`/`} >
          {title}
        </Link>
      </h1>
    )
  return (
    <div>
      <div id="stage"></div>
      <header>
        <Section id="headerSection">
          <Container>
              {header}
          </Container>
        </Section>
      </header>
      
      <main>{children}</main>
      <footer>
        
      </footer>
    </div>
  )
}

export default Layout
