import React from 'react';


class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2
        };
    }

    render() {

        const {name, location, role, contact} = this.props;
        const {count, count2} = this.state;

        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <h1>Count2 : {count2}</h1>
                <button onClick={() => {
                    this.setState( {
                        count: count + 1,
                        count2: count2 + 1
                    });
                }}>Increase</button>
                <button onClick={() => {
                    this.setState( {
                        count: this.state.count = 0,
                        count2: this.state.count2 = 2
                    });
                }}>Reset</button>
                <button onClick={() => {
                    this.setState( {
                        count: count - 1,
                        count2: count2 - 1
                    });
                }}>Decrease</button>
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
                <h3>Role : {role} </h3>
                <h3>Contact : {contact} </h3>
            </div>
    
        )
    }
}

export default UserClass;