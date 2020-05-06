import cat from "../assets/cat.jpg"
import React,{Component} from 'react';
import donald from "../assets/donald.jpg"

const data=[
{
    name:'visa_win',
    pic:
    [{
    url:cat,
    likes:2,
    bookmark:true,
    comments:{
        Harini:'lookg great',
        Sharan:'wow,Amazing',
      
    }},
    {  
        url:donald,
    likes:2,
    bookmark:false,
    comments:{
        Harini:'lookg great',
        Sharan:'wow,Amazing',
     

    }
}
    ]
},
{
    name:'Harini',

    pic:
    [{
    url:donald,
    likes:2,
    bookmark:false,
    comments:{
        Visa:'lookg great',
        Sharan:'wow,Amazing',
      
    }},
    {  
        url:cat,
    likes:2,
    bookmark:false,
    comments:{
      visa:'lookg great',
        Sharan:'wow,Amazing',
       

    }
}
    ]
},
{
    name:'Shanu',

    pic:
    [{
    url:cat,
    likes:2,
    bookmark:false,
    comments:{
        Visa:'lookg great',
        Sharan:'wow,Amazing',
      
    }},
    {  
        url:donald,
    likes:2,
    bookmark:false,
    comments:{
      visa:'lookg great',
        Sharan:'wow,Amazing',
       

    }
}
    ]
}



]

export default data
