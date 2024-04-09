import React from "react";
import Team from "./Team";

class TeamCls extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      FirstCount: 0,
      SecondCount: 1,
      userInfo: {
        name: "XYZ",
        avatar_url: "https://th.bing.com/th/id/R.86a4a50b7ba57d2e1e9f4cdba04f41a2?rik=wW%2foeEkbYiROhg&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f3-33821_emoticon-logo-png-smiley-face-emoji.png&ehk=WKwIbthBAWGACkcSx%2bh%2buET07c9MwtaDNzx8Bb5%2bQFQ%3d&risl=&pid=ImgRaw&r=0",
      },
    };
    console.log(this.props.name + "Child constructor is called ");
  }

  componentDidUpdate (args){

    // console.log("Hello" + " "+ prevProps)

    console.log(args);
  }

  

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sachinsoumya");

    const json = await data.json();

    console.log(json.name);

    this.setState({
      userInfo : json

    });

    this.timer = setInterval(()=>{
      console.log("Hello Sachin")
    },1000)
  }

  componentWillUnmount (){
    clearInterval(this.timer);
    console.log("Component is unmounted");
  }

   

  render() {
    console.log(this.props.name + " child Rerendering....");
    console.log(this.state.userInfo);
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h1>Name :{this.props.name}</h1>
        <h2>Count: {this.state.FirstCount}</h2>
        <h2>Second Count: {this.state.SecondCount}</h2>
        <h2>Designation : Developer</h2>
        <h3>Social Media : {this.props.social}</h3>
        <h3>UserName : {this.state.userInfo.name}</h3>
        <img src={this.state.userInfo.avatar_url} alt="profileImage" />
        <button
          onClick={() =>
            this.setState({
              FirstCount: ++this.state.FirstCount,
            })
          }
        >
          Increse Count
        </button>

        {/* <TeamCls name="nested child" /> */}
      </div>
    );
  }
}

// const x = new TeamCls({name:"Sachin"});

// console.log(x.render());

// console.log(TeamCls);

export default TeamCls;
