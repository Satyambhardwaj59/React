import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import { Component } from "react";


class About extends Component {

    constructor(props){
        super(props)
        console.log("parent constructor");
        
    }

    componentDidMount(){
         console.log("parent componentDidMount");
    }

    componentDidUpdate(){   
        console.log("parent componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("parent componentWillUnmount");
    }

    render(){
         console.log("parent render");
        
        return (
            <div className="about-card">
                <h1>About Us</h1>
                <h2>We are a group of developers who are passionate about coding and building applications.</h2>
    
                
                <UserClass name={"Satyam form (class)"} location={"Begusarai"} role={"Web Devloper"} contact={"satyambhardwaj59@gmail.com"} />
                
                <UserClass2 name={"Satyam form (class)"} location={"Begusarai"} role={"Web Devloper"} contact={"satyambhardwaj59@gmail.com"} />
            </div>
        )
    }
}
    
export default About;
