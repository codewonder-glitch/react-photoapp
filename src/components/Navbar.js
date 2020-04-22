import React from 'react';
import {  BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import Home from './Home'
import './Home.scss'
import Userprofiles from './userprofiles';
import Bookmarks from './Bookmarks'


export default class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
render(){
console.log("Are u coming nav")
    return(

<Router>
    <ul>
    <li>
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
        
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/users"><Userprofiles /></Route>
        <Route exact path="/Bookmarks"><Bookmarks /></Route>
        </Switch>

        </Router>




    );
}
    }