import React from "react"

// This function takes a component...
function projectContentHOC(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
      
  
      componentDidMount() {
        // this wasn't really needed. I just wanted to practice HOCs
      }
  
      componentWillUnmount() {
        
      }
  
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
}
export default projectContentHOC