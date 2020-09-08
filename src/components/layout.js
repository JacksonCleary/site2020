import React from "react"
import { Link } from "gatsby"

import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
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
      <Container>
        <Section id="headerSection">
          <Content>
            <Columns>
              <Columns.Column>
                <header>{header}</header>
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
              </Columns.Column>
            </Columns>
          </Content>
        </Section>
      </Container>
    </div>
  )
}

export default Layout
