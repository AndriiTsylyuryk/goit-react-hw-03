import React from "react";

const Contact = ({item}) => {
  return <div>
    <p>{item.name}</p>
    <p>{item.number}</p>
    <button type="button">Delete</button>
  </div>;
};

export default Contact;
