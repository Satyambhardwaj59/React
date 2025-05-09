import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import { Component } from "react";
import UserContext from "../utils/UserContext";


class About extends Component {

    constructor(props){
        super(props)
        
    }

    render(){
         
        
        return (
            <div className="m-8 border-2 border-solid border-black p-4">
                <h1 className="text-3xl mb-6">About Us</h1>
                <div>
                    
                    <UserContext.Consumer>
                        {({loggedInUser}) => (<h1 className="text-2xl font-bold">LoggedInUser : {loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <h2 className="text-2xl">We are a group of developers who are passionate about coding and building applications.</h2>

                <UserClass name={"Satyam form (class)"} location={"Begusarai"} role={"Web Devloper"} contact={"satyambhardwaj59@gmail.com"} />
                
                <UserClass2 name={"Satyam form (class)"} location={"Begusarai"} role={"Web Devloper"} contact={"satyambhardwaj59@gmail.com"} />
            </div>
        )
    }
}
    
export default About;
