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
                
               var url= dat1.pic.map((dat,i)=>{       
return(<div>
<img className="img" src={dat.url}/>
<div className="Likecomment">
 {dat.likes}<img className="like" src={like}/>
{url=Object.entries(dat.comments).map(([key, value]) => {
     
    return(
    <div>
     
    <h3>{ `${key}: ${value}`} </h3>
 
    </div>)
    // console.log(`${key}: ${value}`)
    })}
 
 
 </div> 
 </div>
)})
 
 

               

        // }) 
        linkroutes.push(  <div ><Link to={'/User'+i}>{dat1.name}</Link>
        <Switch>
        <Route exact path={'/User'+i}><Renderusers details={url}/></Route>
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
<div id='user'>
   
<Router>
    

        {this.state.linkroutes}
        
       
        </Router>
        </div>


    

   ) } }


 

    export default Userprofiles;

    