import React from 'react';


class UserClass2 extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Abc",
                location: "xyz",
            }
        }
        
    }

     async componentDidMount(){
         const data = await fetch("https://api.github.com/users/Sonu8544");
         const json = await data.json();
        //  console.log(json);
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

    render() {

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

    }
}

export default UserClass2;