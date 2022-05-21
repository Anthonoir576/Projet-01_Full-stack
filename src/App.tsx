import React          from 'react';
import Title          from './components/Title';
import { Routes, 
  Route,
  BrowserRouter,
  Navigate }          from "react-router-dom";



function App() {



  return (

    <BrowserRouter>
    <Title />
      <Routes>
        <Route  path='/'            element={ <signIn />     } />
        <Route  path='/messagerie'  element={ <Messagerie /> } />
      </Routes>
    </BrowserRouter>

  );

}

export default App;
