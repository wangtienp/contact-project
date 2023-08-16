import Contact from './Basics/Contact';
import { useState,useEffect } from 'react';
import FunctionComp from './Basics/functionComp';
import Prop from './Basics/Prop';


function App() {
  const [contacts, setContacts]=useState([])
  useEffect(()=>{
      fetch('https://randomuser.me/api/?results=5').
      // fetch('https://jsonplaceholder.typicode.com/users').
      then(response=>{
          return response.json()
      })
      .then(data=>{
        console.log(data)
        setContacts(data.results)
      })
  },[])

  return (
    <div className="App">
      {/* Hi world */}
      {/* <FunctionComp /> */}
      {/* <Prop name ='Counter'/> */}
      {/* 10 Contact */}
      {contacts.map((contact)=>{
        return(
        <Contact 
        name = {`${contact.name.first} ${contact.name.last}`}
        email={contact.email} 
        imgURL = {contact.picture.large}
        age = {contact.dob.age}
        />
        
        )
      })}
    </div>
  );
}

export default App;
