import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'
import unlike from './Assets/unlike.jpg'
import like from './Assets/like.jpg'
import './Home.scss'




export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          url1:'',
          url2:'',
          url3:''
          
      }

    }

    componentDidMount(){
      console.log("Am in home")
      var UCRef=firebase.database().ref("users").child("-M5PuO4hTTp6nDZFjQrW").child("Photos").child("URL").once("value")
     .then(snapshot=>{
         console.log(snapshot.val())
         this.setState({url1:snapshot.val()})
        });

        var UCRef=firebase.database().ref("users").child("-M5PuO4hTTp6nDZFjQrW").child("Photos").child("url2").once("value")
     .then(snapshot=>{
         console.log(snapshot.val())
         this.setState({url2:snapshot.val()})
        });
var arr=[]
        var UCRef=firebase.database().ref("users").child("-M5PuO4hTTp6nDZFjQrW").child("Photos").child("comments").limitToFirst(1).once("value")
     .then(snapshot=>{
         console.log(snapshot.val())
        //  arr.push(snapshot.val())
        //  console.log(arr[0])
         this.setState({url3:snapshot.val()})
         console.log(this.state.url3)
        });
    }
render(){

  
  
var str=this.state.url3
console.log(str)

    return(

        <div className="container">
<div>
<img className="img" src={this.state.url1}/>
 <img src={like}/> 
 <img src={unlike}/> 
</div>
<div>
<img className="img" src={this.state.url2}/>
 <img src={like}/> 
 <img src={unlike}/> 
</div>
<div>
<img className="img" src={this.state.url2}/>
 <img src={like}/> 
 <img src={unlike}/> 
</div>
<div>
<img className="img" src={this.state.url2}/>
 <img src={like}/> 
 <img src={unlike}/> 
 <input type="text" value={str}/>
</div>

      </div>




    );
}
    }