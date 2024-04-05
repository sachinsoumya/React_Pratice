import {useRouteError} from 'react-router-dom'
export  const Error =()=>{

     const error=useRouteError();
     console.log(error);
     const {status , statusText} = error

    return (
        <div>

            <h1>Oops ...something went wrong</h1>
            <h2>{status} {statusText}</h2>
            </div>
    )
}
