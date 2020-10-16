import React, {useState} from "react"
import { Link } from "gatsby"
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import { Twirl as Hamburger } from 'hamburger-react'
import OffCanvas from 'react-aria-offcanvas'
import Navigation from './primaryNavigation'
import Social from './primarySocial'

const Layout = ({ location, title, children }) => {
  let header
  let date = new Date().getFullYear()
  let offCanvasStyles

  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  header = (
    <>
      <div className="headerContent vertical_align">
        <Hamburger 
            toggled={isOpen} 
            toggle={setOpen}
        />
        <h1>
          <Link to={`/`} >
            {title}
          </Link>
        </h1>
        <Navigation />
        <Social />
      </div>
    </>
  )

  offCanvasStyles = { 
    overlay: {
      background: 'none'
    }, 
    content: {
      background: 'rgb(110, 177, 216)',
      height: '100vh'
    }
  }

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
        <Section id="footerSection">
          <Container>
            @{date} - built with <a rel="noreferrer" href="https://www.gatsbyjs.com/" target="_blank">Gatsby.js</a>
          </Container>
        </Section>
       
      </footer>
      <OffCanvas
          isOpen={isOpen}
          onClose={toggleOpen}
          labelledby="menu-button"
          style={offCanvasStyles}
          width="400px"
        >
          {header}
          <Navigation mobile={true} />
          <Social mobile={true} />
        </OffCanvas>
    </div>
  )
}

export default Layout
