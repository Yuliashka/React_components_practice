import React from "react";
import Avatar from "./Avatar.jsx";
import Details from "./Details.jsx";

//in our Card component we pass some props - properties,
//and these properties are coming from App.jsx. Ant
//this is name, img, tel, email.
//We pass our properties from App to Card, then from Card
//to Avatar.
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
