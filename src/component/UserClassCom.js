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

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/susan1130");
        const jSOn = await data.json();
        console.log(jSOn);

        this.setState({
            userInfo : jSOn,
        });
      
    }
    
    render(){
        const {location} = this.props;
        return(
            
            <div className="p-2 m-2 bg-yellow-100">
                <h2>Name: {this.props.name}</h2>
                <h3>Contact: {location}</h3>
                <h4>Locality: India</h4>
                <p>Magic buttons ahead. Click on the first and see what happens</p>
                <button onClick={ () =>{
                    this.setState({
                        cCount1: this.state.cCount1 +1,
                        cCount2: this.state.cCount2 + 2,
                    });
                }}
                className="p-2 m-2 bg-slate-50 rounded-lg"
                >Count 1 : {this.state.cCount1}</button>
                <button className="p-2 m-2 bg-slate-50 rounded-lg">Count 2 : {this.state.cCount2}</button>
                <div className="p-2 m-2 bg-emerald-100 rounded-lg flex">
                    <div className="w-6/12 p-4">
                        <h3>Name : {this.state.userInfo?.name}</h3>
                        <h4>GitHub Handle : {this.state.userInfo?.login} </h4>
                        <h4>Bio : {this.state.userInfo?.bio} </h4>
                        <h4>Followers : {this.state.userInfo?.followers} </h4>
                        <h4>Following : {this.state.userInfo?.following} </h4>
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/48977015?v=4" className="w-3/12 p-8 h-auto"/>
                </div>
            </div>
        )
    }
}

export default UserClassCom;