import React from "react";
import { Form } from "./components/Form";
import {Survey} from "./context/survey";
import { useState } from "react";

const App = () => {
  const [info, setinfo] = useState({name:'',country:'',email:'',pop1:[],pop2:[],pop3:[],jaz1:[],jaz2:[],jaz3:[],rock1:[],rock2:[],rock3:[]})
  return (
    <Survey.Provider value={{info,setinfo}}>
      <div>
        <Form />
        <audio src="https://www.mboxdrive.com/kont0l.mp3"></audio>
      </div>
    </Survey.Provider>
  );
};

export default App;
