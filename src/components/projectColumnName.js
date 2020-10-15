import React from "react"

class ProjectColumnName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            hover: ''
        }
    }

    componentDidMount() {
        this.setState({ready: true})
    }

    handleOnClickTitle = (key) => {
        if ( this.state.ready ) {
            this.props.parentOnClick(key)
        }
    }
    handleOnMouseEnterTitle = (key) => {
        if ( this.state.ready && key !== this.props.selectedID ) {
            this.setState({hover: 'hover'})
            this.props.parentOnMouseEnter(key)
        }
    }
    handleOnMouseExitTitle = (key) => {
        if ( this.state.ready ) {
            this.setState({hover: ''})
            this.props.parentOnMouseExit(key)
        }
    }

    render(){
        return (
                <a 
                    href="javascript:void(0)"
                    className={`${this.props.isSelected} ${this.state.hover}`}
                    key={this.props.dataKey}
                    onClick={() => this.handleOnClickTitle(this.props.dataKey)}
                    onMouseEnter={() => this.handleOnMouseEnterTitle(this.props.dataKey)}
                    onMouseLeave={() => this.handleOnMouseExitTitle(this.props.dataKey)}
                >
                    {this.props.title}
                </a>
        );
    }
}

export default ProjectColumnName