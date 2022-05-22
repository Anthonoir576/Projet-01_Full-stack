import { Routes, Route, BrowserRouter } from "react-router-dom";
import React                            from 'react';
import Title                            from './components/Others/Title';
import SignIn                           from './components/Sign-in/SignIn';
import Messagerie                       from './components/Messagerie/Messagerie';
import Footer                           from "./components/Others/Footer";
// import NoPage                           from "./components/NoPage";



function App() {



  return (

    <BrowserRouter>
      <Title />
      <Routes>
        {/* <Route  path='*'            element={ <NoPage     /> } /> */}
        <Route  path='*'            element={ <SignIn     /> } />
        <Route  path='/messagerie'  element={ <Messagerie /> } />
      </Routes>
      <Footer />
    </BrowserRouter>

  );

}

export default App;
