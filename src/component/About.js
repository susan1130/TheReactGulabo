import User from "./User";
import UserClassCom from "./UserClassCom"; 
import UserContext from "./UserContext";



const About = () => {
    return (
        <div>
            <h2 className="py-5 px-3"> Meet the team responsible for your misery. </h2>
            <hr/>
            <div className="flex p-3">
                LoggedInUser : <UserContext.Consumer>{ ({loggedInUser}) =>(
                            <h1>{loggedInUser}</h1>
                       )}
                     </UserContext.Consumer> 
            </div>
            <User name={"STEW_fromFunction"}/>            
            <UserClassCom name={"PQR_fromClass"} location={"London"}/>
        </div>
    )
};

export default About;