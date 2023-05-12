import React from "react";
import user from "../images/User.jpeg";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  console.log(props.contact);
  return (
    <div className="item">
      <img className="ui avatar image " src={user}></img>

      <div className="content">
        <Link
          to={{
            pathname: `/contact/${props.contact.id}`,
            state: { contact: props.contact },
          }}
        >
          <div className="header">{props.contact.name}</div>
          <div>{props.contact.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => {
          props.clickHandler(props.contact.id);
        }}
        style={{ color: "red", marginTop: "7" }}
      ></i>
    </div>
  );
}
