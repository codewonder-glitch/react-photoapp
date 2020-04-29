 import React from 'react';
// import {Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:'',
            registered:''
        }
    }
    getRegister=(e)=>{
        e.preventDefault();
        console.log("I came here")
        firebase.database().ref("users")
        .push({

            firstname:this.state.firstName,
            lastname:this.state.lastName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
             } );
        
     
this.setState({registered:"true"})
         console.log(this.state.email)
         alert("Successfully Registered,Please login")
        // firebase.database().ref("users")
        // .once("value").then(snapshot=>console.log(snapshot.val()))
        }


    
            
       
     
    
       componentDidMount(){

       }


    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return (
            <div>
{!(this.state.registered)?
            (<div className="col-md-6 col-md-offset-3">
            <h2>Registration Form</h2>
            <form onSubmit={this.getRegister}>
                
            <div className='form-group'>
                <label>First Name:</label>
                <input type="text" name="firstName" className="form-control" onChange={this.handleChange} value={this.state.firstName} />
            </div>
            <div className='form-group'>
                <label>Last Name:</label>
                <input type="text" name="lastName" className="form-control" onChange={this.handleChange} value={this.state.lastName} />
            </div>
            <div className='form-group'>
                <label>Username:</label>
                <input type="username" name="username" className="form-control" onChange={this.handleChange} value={this.state.username} />
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input type="email" name="email" className="form-control" onChange={this.handleChange} value={this.state.email} />
            </div>
            <div className='form-group'>
                <label>Password: </label>
                <input type="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} />
                </div>
            <button type="button" className="btn btn-primary" type="submit">Register</button>
            
           </form></div>):null}

</div>
            
        );
    }
    }
    