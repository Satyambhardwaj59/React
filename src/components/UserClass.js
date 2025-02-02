import React from 'react';


class UserClass extends React.Component {

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

    render() {

        const {name, location, avatar, bio, contact} = this.state.userInfo;

        return (
            <div className="flex flex-col sm:flex-row ml-[1] md:ml-4 mt-3 sm:mt-0  justify-around m-[1] md:m-8 p-1 sm:p-4 border-2 border-solid border-orange-300">
                <img src={avatar} alt=""  className="w-[200] rounded-full"/>
                <div className='text-xl space-y-2'>
                    <h1 className='text-orange-500'>Name : {name}</h1>
                    <h2>Location : {location}</h2>
                    <h3>Role : {bio} </h3>
                    <h3>Contact : {contact} </h3>
                </div>
            </div>
    
        )

    }
}

export default UserClass;