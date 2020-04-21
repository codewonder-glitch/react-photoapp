import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Register from './register'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            register: false,
            login:true,
            home:false
        }
    }

    componentWillMount(){
        console.log("Component will mount")       
    }
   
    Logintohome=(e)=>{
        console.log("log")
e.preventDefault();
       this.setState({home:true})
    }

    gotoRegister=(e)=>{
        this.setState({register:true})
    }
    
    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
   

        return (
            <div>
            {(this.state.login) ? (<div className="col-md-6 col-md-offset-3">
                <h2>Login Form</h2>
                <form name="form">
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type="email" name="email" className="form-control"  onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className='form-group'>                    
                        <label>Password: </label>
                        <input type="password" name="password" className="form-control"  onChange={this.handleChange} value={this.state.password} />
                    </div>
                 
                    <input type="button" className="btn btn-primary" name="Login" value="Login" onClick={this.Logintohome}/>
                    
                    {this.state.register?(<Register/>):<input type="button" className="btn btn-primary" type="submit" value="register"
                    onClick={this.gotoRegister} />}
                  
        
                </form>
            </div>):null}
              {this.state.home ?(<h1>"logged"</h1>):(false)}
            </div>
            
        )
    }

}


