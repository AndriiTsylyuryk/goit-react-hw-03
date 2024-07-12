import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ contactList }) => {
  return (
    <div>
      <ul>
        {contactList.map((item) => (
          <li key={item.id}>
            <Contact item={item}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
