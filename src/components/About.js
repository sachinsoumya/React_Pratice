import { Outlet, Link } from "react-router-dom";
import Team from "./Team";
import TeamCls from "./TeamCls";
const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <button>
        <Link to="/about/app">About App</Link>
      </button>
      <button>
        <Link to="/about/team">About Team</Link>
      </button>

      

      <Team name="S.S. Panda" social="@sachinsoumya" />
       
       
      <TeamCls name="S.S. Panda(Class)" social="@sachinsoumya(Class)" />
      <Outlet />
    </div>
  );
};

export default About;
