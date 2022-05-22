import { Routes, Route, BrowserRouter } from "react-router-dom";
import React                            from 'react';
import Title                            from './components/Title';
import SignIn                           from './components/SignIn';
import Messagerie                       from './components/Messagerie';
import Footer from "./components/Footer";
// import NoPage                           from "./components/NoPage";



function App() {



  return (

    <BrowserRouter>
      <Title />
      <Routes>
        {/* <Route  path='*'            element={ <NoPage     /> } /> */}
        <Route  path='/'            element={ <SignIn     /> } />
        <Route  path='/messagerie'  element={ <Messagerie /> } />
      </Routes>
      <Footer />
    </BrowserRouter>

  );

}

export default App;
