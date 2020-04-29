import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Register from './register'
import firebase from '../../firebase'
import Navbar from '../Navbar'
import bg from '../../assets/Background.jpg'
import './Login.scss'
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            register: false,
            login:true,
            home:false,
            username:'',
            displaypic:''
        }
    }

    componentWillMount(){
        console.log("Component will mount")       
    }
   
    Logintohome=(e)=>{
    e.preventDefault();
    //Fetching data from firebase
// var UCRef=firebase.database().ref("users")
// UCRef.on('value', snapshot => {
//     console.log(snapshot.val())
//   });
//        this.setState({home:true});

this.setState({home:true});
this.setState({login:false});
var usernames = firebase.database().ref("users/");
var arr=[];
usernames.orderByChild("email").on("child_added", function(data) {
   arr.push(data.val().email);
});
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==this.state.email)
    console.log("match found")
}
    

usernames.orderByChild("email").equalTo(this.state.email).on("child_added", function(data) {
    console.log("Start at filter: " + data.val().displaypic);
    this.setState({username:(data.val().username)})
    this.setState({displaypic:(data.val().displaypic)})
 }.bind(this))

//     removing data

//    firebase.database().ref("users"+"Visalakshi").child("Senthol").remove();

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
                <h1>Collection of memories</h1>
                <img src={bg} alt="not loaded" />
            {(this.state.login) ? (<div className="Login">
                <h2>Login Form</h2>
                <form name="form">
                   
                        <label>Email</label>
                        <input className='inputtxt' type="email" name="email" className="form-control"  onChange={this.handleChange} value={this.state.email} />
                    
                                    
                        <label>Password </label>
                        <input className='inputtxt' type="password" name="password" className="form-control"  onChange={this.handleChange} value={this.state.password} />
                    
                 
                    <input type="button" className="btn" name="Login" value="Login" onClick={this.Logintohome}/>
                    
                    {this.state.register?(<Register/>):<input type="button" className="btn btn-primary" type="submit" value="register"
                    onClick={this.gotoRegister} />}
                  
        
                </form>
            </div>):null}
              {this.state.home ?<Navbar name={this.state.username} displaypic={this.state.displaypic}/>:(false)}
            </div>
            
        )
    }

}


