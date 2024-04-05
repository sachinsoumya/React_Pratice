import { Outlet ,Link } from "react-router-dom";
const About = ()=>{
    return (
        <div>
            <h1>This is about page</h1>
            <button ><Link to="/about/app">About App</Link></button>
            <button><Link to="/about/team">About Team</Link></button>
            <Outlet />
        </div>
    )
}

export default About;