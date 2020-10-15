/**
 * ContactContent component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import BodyClassName from 'react-body-classname';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

import ContactForm from './contactForm.js'

const ContactContent = () => {
    
  

  return (
    
    <Content>

        <BodyClassName className="contact">

            <Section id="mainSection">
                <Container>

                        <Columns.Column size={12}>
                            <h1>Contact Me</h1>
                            <p>Send me a message; I'll do my best to respond ASAP.</p>
                            <hr />
                            <ContactForm/>

                        </Columns.Column>
                    

                </Container>
            
            </Section>

        </BodyClassName>
    </Content>
  )
}

export default ContactContent
