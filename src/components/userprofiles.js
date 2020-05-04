import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import like from '../assets/like.png'
import data from './Data'
import Home from './Home'
import './Home.scss'
import Renderusers from './Renderuser'

import Bookmarks from './Bookmarks'


 class Userprofiles extends React.Component{
    constructor(props){
        super(props)
        this.state={

            linkroutes:null,
            url:null
        }
    }
    componentDidMount=()=>{
        this.getBookmark();

    }

    componentDidUpdate=()=>
    { this.getBookmark();
    } 
    getBookmark(){
     var cmts,result=[],url,linkroutes=[]
     if(this.props.name!='')
        {
          data.forEach((obj,i) => {
            if(obj.name != this.props.name){
                console.log(obj.name)
              result.push(obj)
              }
              })
              
              result.map((dat1,i)=>{
                
                dat1.pic.map((dat,i)=>{
                   
       //detail={url[i]}
            console.log("cuming hee")
           
                
           
{url=<div>
<img className="img" src={dat.url}/>
<div className="Likecomment">
 {dat.likes}<img className="like" src={like}/>
{/* { 
 url=Object.entries(dat.comments).map(([key, value]) => {
     
    return (
        <div>
     <h3> comments </h3>
    <h3>{ `${key}: ${value}`} </h3>
 
    </div>
    // console.log(`${key}: ${value}`)
    )})
 
 } */}
 </div> 
 </div>
 }
 
 



        }) 
        linkroutes.push(  <div><Link to={'User'+i}>{dat1.name}</Link>
        <Switch>
        <Route exact path={'User'+i}><Renderusers /></Route>
        </Switch>
       </div>) 
       
        
    })
        console.log(url)
        // if(this.state.url==null) 
        // this.setState({url:url})

       
console.log(linkroutes)
console.log(this.state.linkroutes)
        if(this.state.linkroutes==null)
            
        this.setState({linkroutes:linkroutes})
        
        console.log(this.state.linkroutes)
    }
 
    }

    
    
render(){
  
        
        console.log(this.props.name)
        
      
        
    return(
<div>
   
<Router>
    

        {this.state.linkroutes}
        {/* {linkroutes=   <div><Link to={'User'+i}>{dat.name}</Link>
 <Switch>
 <Route exact path={'User'+i}><Renderusers /></Route>
 </Switch>
</div> } */}
 
       
        </Router>
        </div>


    

   ) } }


 

    export default Userprofiles;

    