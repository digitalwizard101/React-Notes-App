import React, { useState } from "react";
import { AppProvider } from "./context/AppContext";
import { NoteList } from "./components/NoteList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header";
import SearchNote from "./components/SearchNote";

const App = () => {
  const [dark, setDark] = useState(false);


  return (
    <AppProvider>

      <div className={`${dark && "dark-mode"}`}>
        <div className="container" >



          <Header mode={setDark} />


          <NoteList />
        </div>
      </div>

    </AppProvider>
  );
};

export default App;


// git checkout master   
// git branch main master -f    
// git checkout main  
// git push origin main -f
