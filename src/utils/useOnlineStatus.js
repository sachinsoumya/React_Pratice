import { useEffect , useState} from "react";

const useOnlineStatus = ()=>{

    const [onlineStatus , setOnlineStatus] = useState(true);

    console.log("online status custom hook")


    useEffect(()=>{

        console.log("Hello hook")

        window.addEventListener('offline' , (e)=>{
            console.log(e)

            setOnlineStatus(false);
            

        });


        window.addEventListener("online" , (e)=>{
            console.log(e);

            setOnlineStatus(true);

        })

        




    } , [])




   //Boolean
    return onlineStatus;
}


export default useOnlineStatus ;