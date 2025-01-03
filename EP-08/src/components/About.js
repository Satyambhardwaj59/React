import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-card">
            <h1>About Us</h1>
            <h2>We are a group of developers who are passionate about coding and building applications.</h2>

            <User name={"Satyam form (function)"} location={"Begusarai"} role={"Web Devloper"} contact={"satyambhardwaj59@gmail.com"}/>
            <UserClass name={"Satyam form (class)"} location={"Begusarai"} role={"Web Devloper"} contact={"satyambhardwaj59@gmail.com"} />
        </div>
    )
}

export default About;