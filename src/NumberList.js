import React from 'react';
import ListItem from './ListItem';
import './Login.css';
export default function NumberList(props){
const numbers=props.numbers;
return(
<ul className="NumberList">
    {numbers.map((item)=> <ListItem number={item}/>)}
</ul>
);
}