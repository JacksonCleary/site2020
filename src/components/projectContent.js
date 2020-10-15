import React, {useEffect, useState} from "react"
import BodyClassName from 'react-body-classname';

import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';

import Arr from './utility/arrayFunctions'

import ProjectContentHOC from './projectContentHOC'
import pNames from './projectColumnName'
import pDescriptions from './projectColumnDescription'
import pPictures from './projectColumnPictures'
import pContent from './projectColumnContent'

const ProjectColumnName = ProjectContentHOC(pNames)
const ProjectColumnDescription = ProjectContentHOC(pDescriptions)
const ProjectColumnPictures = ProjectContentHOC(pPictures)
const ProjectColumnContent = ProjectContentHOC(pContent)

const ProjectContent = (props) => {
    const projects = props.projects.edges
    const titles = Arr.graphQLGroupByNestedFrontMatter(projects, 'title')
    const descriptions = Arr.graphQLGroupByNestedFrontMatter(projects, 'description')
    const images = Arr.graphQLGroupByNestedFrontMatter(projects, 'images')
    const thumbs = Arr.graphQLGroupByNestedFrontMatter(projects, 'thumbs')
    const content = Arr.graphQLGroupByHTML(projects, 'html')
    
    const [defaultID, setDefaultID] = useState(null)
    const [selectedID, setSelectedID] = useState(null)
    const [hoveringID, setHoveringID] = useState(null)
    const [delayHoverHandler, setDelayHoverHandler] = useState(null)

    useEffect(() => {
        if ( !defaultID ) {
            setDefaultID(Object.keys(titles)[0])
        }
        if ( !selectedID ) {
            setSelectedID(defaultID)
        }
    }, [defaultID, selectedID, titles] )

    const onClickCallback = (id) => {
        setSelectedID(id)
        setHoveringID(null)
        clearTimeout(delayHoverHandler)
    }
    const onMouseEnterCallback = (id) => {
        setDelayHoverHandler(setTimeout(() => {
            setHoveringID(id)
        }, 500))    
    }

    const onMouseExitCallback = () => {
        clearTimeout(delayHoverHandler)
    }

    const loopTitles = () => {
        let titleDOMArray = []
        
        Object.keys(titles).map((key, index) => {
            const title = titles[key]
            let isSelected = ( key === selectedID ? 'selected' : '' )
            titleDOMArray.push(
                <ProjectColumnName
                    key={key}
                    dataKey={key}
                    selectedID={selectedID}
                    title={title}
                    isSelected={isSelected}
                    parentOnClick={onClickCallback}
                    parentOnMouseEnter={onMouseEnterCallback}
                    parentOnMouseExit={onMouseExitCallback}
                ></ProjectColumnName>
            )
        })
        return titleDOMArray
      }
   

    return (
        <BodyClassName className="projects">

            <Content id="mainSection">

                <div id="projectsHeader">
                    <Container>
                        <Columns>
                            <Columns.Column 
                                size={12} 
                            >
                                <h1 id="title">Projects</h1>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>

                <Container>
                
                    <Columns id="projectContent">
                        <Columns.Column size={3} >
                            <div 
                                className="projectNameColumn"
                                onMouseLeave={() => setHoveringID(null)}    
                            > 
                                {loopTitles()}
                            </div>
                        </Columns.Column>
                        <Columns.Column size={3} >
                            <ProjectColumnPictures
                                hoveringID={hoveringID}
                                images={images}
                                thumbs={thumbs}
                                selectedID={selectedID}
                            ></ProjectColumnPictures>
                        </Columns.Column>
                        <Columns.Column >
                            <ProjectColumnContent
                                hoveringID={hoveringID}
                                selectedID={selectedID}
                                activeHTML={content}
                            ></ProjectColumnContent>
                        </Columns.Column>
                    </Columns>

                </Container>
                
            </Content>

        </BodyClassName>
    )
}

export default ProjectContent