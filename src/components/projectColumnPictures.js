import React, {useState} from "react"
import Img from "gatsby-image"

import DanielModal from './danielModal'

const ProjectColumnPictures = (props) => {

    const [selectedImagePath,setSelectedImagePath] = useState(null)
    const [currentImageArr,setCurrentImageArr] = useState(null)
    const [currentImageArrIndex,setCurrentImageArrIndex] = useState(0)
    const [modalIsOpen,setIsOpen] = useState(false)

    const displayModal = () => {
       if ( selectedImagePath ) {
        return (
            <DanielModal
                selectedImagePath={selectedImagePath}
                currentImageArr={currentImageArr}
                currentImageArrIndex={currentImageArrIndex}
                modalIsOpen={modalIsOpen}
                onRequestClose={closeModal}
                bindSetSrc={openModal}
            />
        )
       }
       else {return null}
    }
    
    const openModal = (path,images,currentIndex) => {
        setSelectedImagePath(path)
        setCurrentImageArr(images)
        setCurrentImageArrIndex(currentIndex)
        setIsOpen(true);
    }

    const closeModal = () => {
        setSelectedImagePath(null)
        setIsOpen(false);
    }

    const loopImages = () => {
        let images = props.images
        let thumbs = props.thumbs
        let imageDOMArray = []
        let selectedID = props.selectedID
        let hoveringID = props.hoveringID
        
        var isSelected
        if( hoveringID ) { isSelected = hoveringID }
        else if( selectedID ) { isSelected = selectedID }
        else { isSelected = null }

        const hasImages = images[ isSelected ] || []
        const hasThumbs = thumbs[ isSelected ] || []

        if ( isSelected && hasImages && hasThumbs ) {
            if (selectedID || hoveringID && selectedID !== hoveringID ) {
                for( var j = 0; j < hasImages.length; j++ ) {
                    let content
                    let ind = j
                    if ( selectedID && !hoveringID ) {
                        let src = hasImages[j].childImageSharp.fluid.src
                        
                        content = 
                            <div 
                                className="relative gatsby-container"
                                key={'projectImageContainer_' + j}
                            >
                                <Img 
                                key={'projectImage_' + j}
                                fluid={
                                    hasThumbs[j].childImageSharp.fluid
                                } alt="" />
                                <a 
                                    className={"dIcon magnifying-glass modalOpen-" +j} 
                                    onClick={() => {
                                        openModal(src,hasImages, ind)
                                        }}
                                ></a>
                            </div>
                    }
                    else if ( hoveringID ) {
                        content = <div
                            key={'projectImagePlaceholder_' + j}
                            className="hoverPlaceholder"
                        ></div>
                    }
                    imageDOMArray.push( content )
                }
                
            }
       
        }

        return imageDOMArray
      }
   
    return (
        <>
            <div id="projectImages">
                {loopImages()}
            </div>
            {displayModal()}
        </>
    )
}

export default ProjectColumnPictures