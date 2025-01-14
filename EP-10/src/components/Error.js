import { useRouteError } from 'react-router';
import { URL_Err } from '../utils/constants';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={URL_Err} alt="error" />
            {/* <h1>Ooops!!!</h1>
            <h2>Something Wants Wrong</h2>
            <h3>{err.status}  : {err.statusText}</h3> */}
        </div>
    )
}

export default Error;