import React, { useState} from 'react';
import Form from "./component /Form"
import Teamform from "./component /Teamform"
import './App.css';

function App() {
  const [Forms, setForm] = useState([]);

  const addNewinfor = (form) => {
    let newForm = [...Forms, { ...form }];

    setForm(newForm);
  };

  return (
    <div className="App">
      <h2>My Form</h2>
      <Teamform addNewinfor={addNewinfor} />
      <Form forms={forms} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a */}
      {/* //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a> */}
      {/* // </header> */}
    </div>
  );
}

export default App;
