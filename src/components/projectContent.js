import React, {useEffect, useState} from "react"
import BodyClassName from 'react-body-classname';

import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

import Arr from './utility/arrayFunctions'

import ProjectColumnName from './projectColumnName'
import ProjectColumnDescription from './projectColumnDescription'
import ProjectColumnPictures from './projectColumnPictures'
import ProjectColumnContent from './projectColumnContent'

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

    useEffect(() => {
        if ( !defaultID ) {
            setDefaultID(Object.keys(titles)[0])
        }
        if ( !selectedID ) {
            setSelectedID(defaultID)
        }
    })

    const onClickCallback = (id) => {
        setSelectedID(id)
        setHoveringID(null)
    }
    const onMouseEnterCallback = (id) => {
        setHoveringID(id)
    }
    const onMouseExitCallback = () => {
        setHoveringID(null)
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

                    <Columns>
                        <Columns.Column 
                            offset={1}
                            size={2} 
                        >
                            <h1 id="title">Projects</h1>
                        </Columns.Column>
                    </Columns>
                
                    <Columns id="projectContent">
                        <Columns.Column size={1} >

                        </Columns.Column>
                        <Columns.Column size={2} >
                            <div className="projectNameColumn"> 
                                {loopTitles()}
                            </div>
                        </Columns.Column>
                        <Columns.Column size={2} >
                            <ProjectColumnDescription
                                descriptions={descriptions}
                                selectedID={selectedID}
                                hoveringID={hoveringID}
                            >
                            </ProjectColumnDescription>
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
                        <Columns.Column size={1} >

                        </Columns.Column>

                    </Columns>
                
            </Content>

        </BodyClassName>
    )
}

export default ProjectContent