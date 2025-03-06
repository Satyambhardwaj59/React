import Notfi from "./Notfi";

const Contact = () => {
    return (
        <div className="m-4 p-4">
            <h1 className="items-center text-2xl">Heading </h1>
            
            <form >
                <input type="text" placeholder="Name" className="border border-black p-2 m-4" />
                <input type="text" placeholder="Message" className="border border-black p-2 m-4" />
                <button className="border border-black p-2 rounded-lg bg-gray-100">Submit</button>
            </form>
            <Notfi/>
        </div>
    )
}

export default Contact;