import { useEffect, useState } from "react";
import { prodDetailsApi } from "./constant";

const useProd = (prodId)=>{

    const [prodDetails , setProdDetails] = useState("");


    useEffect(()=>{
        getData();

    },[]);

    const getData = async()=>{


        try {

        const data = await fetch(prodDetailsApi + prodId);

        const json = await data.json();

        setProdDetails(json);
        }catch(error){
            setProdDetails(undefined);
        }



    }


    console.log("First rendering in custom hook...");




    return  prodDetails && prodDetails ;

}

export default useProd ;