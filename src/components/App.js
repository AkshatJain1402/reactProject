import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import ContactCard from "./ContactCard";
import Header from "./Header";
import { v4 as uuid } from "uuid";
import ContactDetail from "./ContactDetail";

export default function App() {
  const Local_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(Local_STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(Local_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // const contacts=[{
  //   id:"1",
  //   name:"Dipesh",
  //   email:"dipesh@gmail.com"
  // },{id:"2",
  //   name:"Akshat",
  //   email:"Akshat@gmail.com"
  // },
  // ]
  const addContactHandler = (contact) => {
    console.log(contact + "from add contacthandler");
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContacts = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  console.log(contacts);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            Component={() => (
              <AddContact addContactHandler={addContactHandler}></AddContact>
            )}
          />
          {/* <Route path='/' render={(props)=>(<Contact {...props} contacts={contacts} getContactid={removeContacts}></Contact>)}></Route> */}
          <Route
            path="/"
            Component={() => (
              <Contact contacts={contacts} getContactid={removeContacts} />
            )}
          ></Route>
          <Route path="/contact/:id" element={<ContactDetail />}></Route>
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} />
        <Contact contacts={contacts} getContactid={removeContacts}/> 
        
        to pass props to components in a route just pass the whole component in a arrow function
        <Route path='/' Component={()=><Contact contacts={contacts} getContactid={removeContacts}/>}></Route>
        but using this approach everytime we visit route it gets re created so it will create performance issues so to solve this we will be using render to just UPDATE THE DATA
        
        */}
      </Router>
    </div>
  );
}
