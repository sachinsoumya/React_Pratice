import React from "react";
import Team from "./Team";

class TeamCls extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
        FirstCount : 0 ,
        SecondCount :1
        
    }
    
  }

  render() {
    console.log("Rerendering....")
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h1>Name :{this.props.name}</h1>
        <h2>Count: {this.state.FirstCount}</h2>
        <h2>Second Count: {this.state.SecondCount}</h2>
        <h2>Designation : Developer</h2>
        <h3>Social Media : {this.props.social}</h3>
        <button onClick={()=>this.setState({
            FirstCount : ++this.state.FirstCount ,
            
        })}>Increse Count</button>
      </div>
    );
  }
}

// const x = new TeamCls({name:"Sachin"});

// console.log(x.render());

// console.log(TeamCls);

export default TeamCls;
