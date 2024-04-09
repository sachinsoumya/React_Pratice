import { useEffect } from "react";
const Contact = ()=>{
    
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
        </div>

    )
}

export default Contact