import { Component } from "react";
class Dommy extends Component{
    constructor(props){
        super(props);
        console.log("nested child constructor is called")
    }
  render(){

    console.log("Nested render is called");

    return (
        <div>
            <h1>{this.props.name}Hello Dommy</h1>
        </div>
    )
  }

  componentDidMount (){

    console.log("Nested component is mounted");
  }

}

export default Dommy;