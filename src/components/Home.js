import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import data from './Data'
import like from '../assets/like.png'
import './Home.scss'
import cat from '../assets/cat.jpg'

export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state={

            url:null,
            cmts:null
        }
    }
    componentDidUpdate(){ this.getBookmark();
    }
    getBookmark(){
        console.log(this.props.name)
        var cmts,result={}
        
    if(this.props.name!='')
        {
        data.forEach((obj,i) => {
            
            if(obj.name == this.props.name){
              result= obj
              }
              })
           console.log(result)
            
    var url=result.pic.map(dat=>{
            return(
              
<div>
<img className="img" src={dat.url}/>
<div className="Likecomment">
 {dat.likes}<img className="like" src={like}/>
 { 
 url=Object.entries(dat.comments).map(([key, value]) => {
     
    return (
        <div>
     
    <h3>{ `${key}: ${value}`} </h3>
 <h3> </h3>
    </div>
    // console.log(`${key}: ${value}`)
    )})
 
 }
 </div> 
 </div>)


        }
            
        )
 
           if(this.state.url==null) 
     this.setState({url:url})
      

        }
    }
render(){
console.log(this.props.name)
    return(
<React.Fragment>
        <div className="container">
    {this.state.url}
   
        </div>

        </React.Fragment>


    );
}
    }