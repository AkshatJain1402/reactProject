import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const Contact = ({ contacts, getContactid }) => {
  const deleteContactHandler = (id) => {
    getContactid(id);
  };

  const contactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
      ></ContactCard>
    );
  });
  return (
    <div className="ui celled list">
      <h2>{contactList}</h2>

      <Link to={"/add"}>
        <button className="ui button right blue"> Add contact</button>
      </Link>
    </div>
  );
};

export default Contact;
