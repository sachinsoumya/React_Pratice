import { useCallback, useMemo, useRef, useState } from "react";
import { checkPrime } from "../utils/mock";

const Demo = () => {
  const [num, setNum] = useState(2);

  const [them, setThem] = useState(false);

  const doCheck = (num)=> ++num;

  

  // *const prime = checkPrime(num);// This is computation heavy function call So here we can use useMemo hook.

  const prime = useMemo(()=> doCheck(num) , [num]);

  const love = useCallback((para1)=>{
     return num + para1

  },[num])


  const refVar = useRef(10);

  console.log(refVar.current);

  

   console.log(prime);

   console.log(love(10));

  return (
    <div>
      <h1>This is demo</h1>

      <div
        className={
          "w-4/12 h-56 border border-black p-3 " +" "+
          (them && "bg-slate-800 text-white")
        }
      >
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="border border-black p-2"
        />
        <button
          onClick={() => setThem(!them) }
          className="border border-black p-2"
        >
          Dark
        </button>
        <button
          onClick={() => refVar.current= refVar.current+1 }
          className="border border-black p-2"
        >
          Refer
        </button>

        <div className="font-bold">{prime}{" "}Ref-{refVar.current}</div> 
      </div>
    </div>
  );
};

export default Demo;
