import React from "react";
import NumberList from "./NumberList";



const numbers=[1,2,3,4,5];

export default class InLog extends React.Component{
    render(){
        return(
            <NumberList numbers={numbers}/>
        );
    }

}