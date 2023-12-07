// import logo from './logo.svg';
import React from 'react';
import { Fragment } from 'react';
import './App.css';
import Navbar  from './components/navbar/navbar' ;
import Main  from './components/main/main' ;
import Footer from './components/footer/footer';

function App() {
  return (
    
    <Fragment>
                {/* <div className="App">
      <main className="App-header">
      </main>
    </div> */}
    <Navbar />
    <Main />
    <Footer />
    </Fragment>
    
  )
  
}
    export default App;