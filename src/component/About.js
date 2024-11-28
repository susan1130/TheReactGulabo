import User from "./User";
import UserClassCom from "./UserClassCom";


const About = () => {
    return (
        <div>
            <h2> Meet the team responsible for your misery. </h2>
            <hr/>
            <User name={"STEW_fromFunction"}/>            
            <UserClassCom name={"PQR_fromClass"} location={"London"}/>
        </div>
    )
};

export default About;