import React from "react"

class ProjectColumnDescription extends React.Component {
    
    assignSelected = (hoveringID,selectedID) => {
        if( hoveringID ) { return hoveringID }
        else { return selectedID }
    }

    renderContent = () => {
        let hoveringID = this.props.hoveringID
        let selectedID = this.props.selectedID
        var isSelected = this.assignSelected(hoveringID, selectedID)

        let activeDescription = this.props.descriptions[isSelected] || null
        if ( activeDescription ) {
            return (<p>{activeDescription}</p>)
        }
        else { return ''}
    }

    render(){
        return (
            <div className="projectDescriptionColumn">
                {this.renderContent()}
            </div>
        );
    }
}

export default ProjectColumnDescription