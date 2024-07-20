import React from "react";

function Heading(){

const date = new Date();
const currentTime =date.getHours();
const name ="Anu"

let say;

const customstyle={
color: ""
}
if (currentTime <12){
    say = "Good Morning"
    customstyle.color="red";
}else if(currentTime <18){
    say ="Good Afternoon"
    customstyle.color="Green";
}else{
    say ="Good Night"
    customstyle.color="blue";
}
return <h1 className="heading" style={customstyle}>{"Hello"+" "+say+" "+name+"!!!"}</h1>
}

export default Heading;