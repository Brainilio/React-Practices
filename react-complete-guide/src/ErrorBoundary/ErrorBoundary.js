import React, { Component} from 'react' 


// Only use this if you know if your code is going to fail
class ErrorBoundary extends Component { 

    state = { 
        hasError: false, 
        errorMessage: ''
    }

    // Method that receives an error
    componentDidCatch = (error, info) => { 
        // Will throw upon each component that gets wrapped with the errorboundary 
        this.setState({hasError: true, errorMessage: error})
    }


    render() { 
        if(this.state.hasError)  { 
            // If we get error, this method will fire
            return <h1>Something went wrong</h1>
        } else { 
            // This is whatever we wrap inside of the errorboundary
            return this.props.children; 
        }
        
    }
}

export default ErrorBoundary; 