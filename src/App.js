import React from 'react';
import Header from './components/header.js';
import ContactCard from './components/ContactCard.js';
import './App.css';
import data from './data/employees.json';


function App() {
  return (
    <div className="App">
      <Header/>
    
      <div className='cardCont'>
      {data.Employees.map(i => <ContactCard firstName={i.firstName} lastName={i.lastName} jobTitle={i.jobTitle} region={i.region} phoneNumber={i.phoneNumber} emailAddress={i.emailAddress}/>)}
      </div>

    </div>
  );
}

export default App;
