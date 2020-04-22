import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Register from './register'
import firebase from '../../firebase'
import Navbar from '../Navbar'

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
    console.log("Start at filter: " + data.val().username);
 });

    //removing data

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
              {this.state.home ?<Navbar />:(false)}
            </div>
            
        )
    }

}


