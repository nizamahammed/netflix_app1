import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import {originals,action, romance,horror, comedy, documentries } from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
     
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Orginals' />
     <RowPost url={action} title='Action' isSmall />
     <RowPost url={romance} title='Romance' isSmall />
     <RowPost url={horror} title='Horror' isSmall />
     <RowPost url={comedy} title='Comedy' isSmall />
     <RowPost url={documentries} title='Documentries' isSmall />    

    </div>
  );
}

export default App;
