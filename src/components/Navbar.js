import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import data from './Data'
import Home from './Home'
import './Home.scss'
import Userprofiles from './userprofiles';
import Bookmarks from './Bookmarks'


export default class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={

            dataobj:''
        }
    }

    
    
render(){
  
        var result
        console.log(this.props.name)
        
        //  console.log(objdata.name)
        
    return(
<div>
    <div className="thumbnail">
<div>
<img id="displaypic" src={this.props.displaypic}/>
<h1 id='displayheader'>{this.props.name}</h1>
</div>
</div>

<Router>
    <div className="link">
    <ul>

    <li >
        <Link to="/">Home
         </Link>
         </li>
         <li>
        <Link to="/users">Otherusers
         </Link>
         </li>
         <li>
        <Link to="/Bookmarks">Bookmarks
         </Link>
         </li>
         </ul>
         </div>   
         
        <Switch>
        <Route exact path="/"><Home name={this.props.name}/></Route>
        <Route exact path="/users"><Userprofiles name={this.props.name} /></Route>
    <Route exact path="/Bookmarks"   render={(props) => <Bookmarks {...props} name={this.props.name} /> }/>
        </Switch>

        </Router>

        </div>


    );
}
    }