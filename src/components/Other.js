import { Component } from "react";

class Other extends Component{
    constructor (props){

        super(props);

        console.log(this.props.name+"Constructor is called ")
    }

    componentDidMount (){

        console.log(this.props.name+"component is mounted")
    }

    render(){

        console.log(this.props.name + "render is called");

        return (
            <div>
                <h2>Others</h2>
            </div>
        )
    }
}

export default Other;