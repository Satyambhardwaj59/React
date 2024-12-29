import { useRouteError } from 'react-router';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div className="some-space">
            <h1>Ooops!!!</h1>
            <h2>Something Wants Wrong</h2>
            <h3>{err.status}  : {err.statusText}</h3>
        </div>
    )
}

export default Error;