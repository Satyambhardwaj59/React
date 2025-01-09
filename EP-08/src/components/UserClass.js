import React from 'react';


class UserClass extends React.Component {

    constructor(props){
        super(props);
        // this.state = {
        //     count: 0,
        //     count2: 2
        // };

        this.state = {
            userInfo: {
                name: "Abc",
                location: "xyz",
            }
        }
        console.log("child constructor");
        
    }

     async componentDidMount(){
        console.log("child componentDidMount");
        
         const data = await fetch("https://api.github.com/users/Satyambhardwaj59");
         const json = await data.json();
         this.setState({
            userInfo: {
                name: json.name,
                location: json.location,
                avatar: json.avatar_url,
                bio: json.bio,
                contact: json.html_url
            }
         })
         
    }

    componentDidUpdate(){   
        console.log("child componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("child componentWillUnmount");
    }

    render() {

        console.log("child render");
        // const {name, location, role, contact} = this.props;
        // const {count, count2} = this.state;

        const {name, location, avatar, bio, contact} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar} alt=""  className="avatarImg"/>
                <div>
                    <h1>Name : {name}</h1>
                    <h2>Location : {location}</h2>
                    <h3>Role : {bio} </h3>
                    <h3>Contact : {contact} </h3>
                </div>
            </div>
    
        )

        // return (
        //     <div className="user-card">
        //         <h1>Count : {count}</h1>
        //         <h1>Count2 : {count2}</h1>
        //         <button onClick={() => {
        //             this.setState( {
        //                 count: count + 1,
        //                 count2: count2 + 1
        //             });
        //         }}>Increase</button>
        //         <button onClick={() => {
        //             this.setState( {
        //                 count: this.state.count = 0,
        //                 count2: this.state.count2 = 2
        //             });
        //         }}>Reset</button>
        //         <button onClick={() => {
        //             this.setState( {
        //                 count: count - 1,
        //                 count2: count2 - 1
        //             });
        //         }}>Decrease</button>
        //         <h1>Name : {name}</h1>
        //         <h2>Location : {location}</h2>
        //         <h3>Role : {role} </h3>
        //         <h3>Contact : {contact} </h3>
        //     </div>
    
        // )
    }
}

export default UserClass;