import { Outlet, Link } from "react-router-dom";
import Team from "./Team";
import TeamCls from "./TeamCls";
import {Component} from "react";
import Other from "./Other";

class About extends Component {
 constructor(props){

  super(props);

  console.log("Parent constructor")
 }

 componentDidMount (){

  console.log("Parent is mounted");
 }

  render (){
    console.log("Parent render called ")
    return (
      <div>
        <h1>This is about page</h1>
        <button>
          <Link to="/about/app">About App</Link>
        </button>
        <button>
          <Link to="/about/team">About Team</Link>
        </button>
  
        
  
        {/* <Team name="S.S. Panda" social="@sachinsoumya" /> */}
         
         
        <TeamCls name="S.S.Panda-1(Class)" social="@sachinsoumya(Class)" />
        {/* <TeamCls name={"S.S.Panda-2(class)"} />
        <TeamCls name={"S.S.Panda-3(class)"} />
        */}
        <Outlet />
      </div>
    );

  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is about page</h1>
//       <button>
//         <Link to="/about/app">About App</Link>
//       </button>
//       <button>
//         <Link to="/about/team">About Team</Link>
//       </button>

      

//       <Team name="S.S. Panda" social="@sachinsoumya" />
       
       
//       <TeamCls name="S.S. Panda(Class)" social="@sachinsoumya(Class)" />
//       <Outlet />
//     </div>
//   );
// };

export default About;
