import { useState } from "react";

const User = ({name, location, role, contact}) => {

    const [count, setCount] = useState(0);
    const [count1, setCount1 ] = useState(1);

    return (
        <div className="user-card">
            <h1>count : {count}</h1>
            <h1>count1 : {count1}</h1>
            <button onClick={
                () => {
                    setCount(count + 1);
                    setCount1(count1 + 1);
                }
            }>Increase</button>
            <button onClick={
                () => {
                    setCount(0);
                    setCount1(1);
                }
            }>Reset</button>
            <button onClick={
                () => {
                    setCount(count - 1);
                    setCount1(count1 - 1);
                }
            }>Decrement By 1</button>
            <h1>Name : {name}</h1>
            <h2>Location : {location} </h2>
            <h3>Role : {role} </h3>
            <h3>Contact : {contact} </h3>
        </div>

    )
}

export default User;