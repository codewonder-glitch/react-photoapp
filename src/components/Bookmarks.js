import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import data from './Data'
import like from '../assets/like.png'
import './Home.scss'
import cat from '../assets/cat.jpg'

export default class Bookmarks extends React.Component{
    constructor(props){
        super(props)

        this.state={

            url:[],
            cmts:[]
        }
    }
    componentDidMount(){

        this.getBookmark();
    }
    getBookmark(){
        var cmts
      

        var url=data[0].pic.map(dat=>{
            return(
<div>
<img className="img" src={dat.url}/>
<div className="Likecomment">
 {dat.likes}<img className="like" src={like}/>
 { 
 url=Object.entries(dat.comments).map(([key, value]) => {
     console.log("Hi, am obj entries")
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

        this.setState({url:url})
        this.setState({cmts:cmts})
console.log(this.state.url)
    }
render(){

    return(
<React.Fragment>
    
        <div className="container">
    {this.state.url}
   
        </div>

        </React.Fragment>


    );
}
    }