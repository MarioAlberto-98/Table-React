import React,{Component} from "react";
import InLog from "./InLog";
import FalseLog from "./FalseLog";
import './Login.css';


class Login extends Component{

    state={
        visible:true,
        componentShow:"Login"
    };

    render(){
        if(this.state.componentShow==="Login"){
            return(
                <div className="Login">
                    <p className="textinf" >Email: </p>
                    <input className="textbox" type="email" name="email" />
                    <br/>
                    <p className="textinf">Password: </p>
                    <input className="textbox" type="password" name="password" />
                    <br/>
                    <br/>
                    <button className="buttonlog" onClick={()=>{this.setState({componentShow:"NoUser"})}}>Login</button>
                </div>
             );
        }else if(this.state.componentShow==="DataPeople"){
            return(
                <div className="Login">
                <InLog/>
                <button className="buttonsecction" onClick={()=>{this.setState({componentShow:"Login"})}}>Login Back</button>
            </div>
            );
        }else if(this.state.componentShow==="NoUser"){
            return(
                <div className="Login">
                    
                <FalseLog/>
                <button  className="buttonsecction" onClick={()=>{this.setState({componentShow:"Login"})}}>Login Again</button>
            </div>
            );
        }
        return null;
    }
}
export default Login;