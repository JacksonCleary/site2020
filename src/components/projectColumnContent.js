import React from "react"

import ContentLoader from 'react-content-loader'

class ProjectColumnContent extends React.Component {

    renderLoader = () => {
        let randomBackgroundColor = Math.floor(Math.random()*16777215).toString(16);
        let randomForegroundColor = Math.floor(Math.random()*16777215).toString(16);
        return (
            <ContentLoader 
                viewBox="0 0 680 600"
                backgroundColor={'#' + randomBackgroundColor}
                foregroundColor={'#' + randomForegroundColor}
            >
              {/* Only SVG shapes */}    
              <rect x="0" y="0" rx="5" ry="5" width="680" height="70" />
              <rect x="0" y="87" rx="4" ry="4" width="300" height="13" />
              <rect x="320" y="87" rx="4" ry="4" width="60" height="13" />
              <rect x="0" y="116" rx="4" ry="4" width="20" height="13" />
              <rect x="40" y="116" rx="4" ry="4" width="100" height="13" />
              <rect x="160" y="116" rx="4" ry="4" width="180" height="13" />
            </ContentLoader>
        )
    }
    renderContent = (activeHTML) => {
        return (
            <section dangerouslySetInnerHTML={{ __html: activeHTML }} />
        )
    }
    renderDelegate = () => {
        let hoveringID = this.props.hoveringID
        let selectedID = this.props.selectedID
        var isSelected = this.assignSelected(hoveringID, selectedID)

        let activeHTML = this.props.activeHTML[isSelected] || null
        if ( activeHTML ) {
            if ( selectedID && !hoveringID ) {
                return this.renderContent(activeHTML)
            }
            else if ( hoveringID ) {
                return this.renderLoader()
            }
        }
        else {
            return (<div>No Content Available :[</div>)
        }
    }
    assignSelected = (hoveringID,selectedID) => {
        if( hoveringID ) { return hoveringID }
        else { return selectedID }
    }

    render(){
        return (
            <div className="projectHTMLColumn">
                {this.renderDelegate()}
            </div>
        )
    }
}

export default ProjectColumnContent