import React from "react";

class UserClassCom extends React.Component {

    constructor (props){
        super(props);
        this.state ={
            cCount1: 0,
            cCount2: 1
        }
        //console.log(props);
    }
    
    render(){
        const {location} = this.props;
        return(
            
            <div className="emp-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Contact: {location}</h3>
            <h4>Locality: India</h4>
            <p>Magic buttons ahead. Click on the first and see what happens</p>
            <button onClick={ () =>{
                this.setState({
                    cCount1: this.state.cCount1 +1,
                    cCount2: this.state.cCount2 + 2,
                });
            }}>Count1: {this.state.cCount1}</button>
            <button>Count2: {this.state.cCount2}</button>
        </div>
        )
    }
}

export default UserClassCom;