import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  // const [newContact, addNewContact] = useState([contactList]);

  const [contactList, setContactList] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  console.log({ contactList });
  const addNewContact = (newContact) => {
    setContactList((prev) => {
      return [...prev, newContact];
    });
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox />
      <ContactList contactList={contactList} />
    </div>
  );
};

export default App;
