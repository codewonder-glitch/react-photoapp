import React from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './Home'


export default class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
render(){
console.log("Are u coming nav")
    return(

<Router>
        <Link to="/home">Home
         </Link>
        <Route exact path="/home"><Home /></Route>
        <Link to="/users">Othersusers
         </Link>
        <Route exact path="/users"><Home /></Route>
        <Link to="/Bookmarks">Bookmarks
         </Link>
        <Route exact path="/Bookmarks"><Home /></Route>

        </Router>




    );
}
    }