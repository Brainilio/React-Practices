
// This can be used as a higher order component to wrap content in 
// The reason for doing this is from a css/html perspective, so you don't have to 
// be using divs all the time, you return the props.children, because the children of the prop 
//is everything that is in between the parent class which in this case is aux.js
const aux = props => props.children; 

export default aux; 