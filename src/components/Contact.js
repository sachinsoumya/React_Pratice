import { useEffect } from "react";
import Team from "./Team";
const Contact = ()=>{

    const person = {
        name:"Sachin"
    }

    const arr = [1,2,3,5]
    
    useEffect(()=>{
        console.log("hello contact");
        const timer = setInterval(()=>{
            console.log("hii contact")
        },1000)

        return ()=>{

            clearInterval(timer);
            
            console.log("useEffect returned");
        }
    })

    return (
        <div> 
            <h1>Contact us</h1>
            <Team  {...person}  />
        </div>

    )
}

export default Contact