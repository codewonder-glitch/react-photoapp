import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import like from '../assets/like.png'
import data from './Data'
import Home from './Home'
import './Home.scss'

import Bookmarks from './Bookmarks'


 class Userprofiles extends React.Component{
    constructor(props){
        super(props)
        this.state={

            linkroutes:'',
            url:''
        }
    }

    componentDidUpdate(){ this.getBookmark();
    } 
    getBookmark(){
        console.log(this.props.name)
        var cmts,result={},url,linkroutes
     if(this.props.name!='')
        {

        data.forEach((obj,i) => {
            if(obj.name == this.props.name){
              result= obj
              }
              })
              console.log(url)
              result.forEach(dat1=>{
                  
        url=dat1.pic.map((dat,i)=>{

        if(dat.bookmark==true){
            console.log("cuming hee")
            return(
              
<div>


<img className="img" src={dat.url}/>
<div className="Likecomment">
 {dat.likes}<img className="like" src={like}/>

 { 
 url=Object.entries(dat.comments).map(([key, value]) => {
     
    return (
        <div>
     <h3> comments </h3>
    <h3>{ `${key}: ${value}`} </h3>
 
    </div>
    // console.log(`${key}: ${value}`)
    )})
 
 }
 </div> 
 </div>)

}


        }) 
        linkroutes=<div><Link to='/${dat1.name}'>{dat1.name}</Link>
        <Route exact path='/${dat1.name}'><Renderusers detail={this.state.url[0]}/></Route>
        </div>
    })
        console.log(url)
        if(this.state.url==null)
        {
            
        this.setState({url:url})
        }
        if(this.state.linkroutes==null)
        {
            
        this.setState({linkroutes:linkroutes})
        }
    }
 
    }

    
    
render(){
  
        var result
        console.log(this.props.name)
        
        //  console.log(objdata.name)
        
    return(
<div>
   
<Router>
    

        {this.state.linkroutes}
        </Router>
        </div>


    

   ) } }


 var Renderusers=(props)=>{
  
     return(
<div>
    {this.props.detail}
</div>


     )

    }

    export default Userprofiles;