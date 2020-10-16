/**
 * PrimaryNavigation component that provides main navigation
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Menu from 'react-bulma-components/lib/components/menu';
import { Link } from "gatsby"

const PrimaryNavigation = (props) => {

    const isMobile = ( props.mobile ) ? true : false
    const mobileClass = ( isMobile ) ? 'mobile' : 'desktop'
    
  return (
    
    <>
    <Menu className={mobileClass}>
      <Menu.List>
        <Menu.List.Item renderAs="div">
            <a href={`/resume.pdf`} target="_blank" title="Resume" rel="noopener">
                Resume
            </a>
        </Menu.List.Item>
        <Menu.List.Item renderAs="div">
            <Link to={`/work`} activeClassName="active" >
                Work
            </Link>
        </Menu.List.Item>
        <Menu.List.Item renderAs="div">
            <Link to={`/projects`} activeClassName="active" >
                Projects
            </Link>
        </Menu.List.Item>
        <Menu.List.Item renderAs="div">
            <Link to={`/contact`} activeClassName="active" >
                Contact
            </Link>
        </Menu.List.Item>
      </Menu.List>
    
    </Menu>
    </>
  )
}

export default PrimaryNavigation
