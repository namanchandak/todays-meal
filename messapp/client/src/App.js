
// import React from "react"
// import logo from './logo.svg';
// // import './App.css';
// import Register from "./pages/Register.js"
// import Home from "./pages/Home.js"
// import Addmess from "./pages/Addmess.js"



// export default function App() {
//   return (


// <>

// <Addmess/>
// {/* <Home/> */}
// {/* <Register/> */}

// </>

//   );

// }



import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
// import './App.js';
import  './App.css'
import Add_menu from './pages/Add_menu';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Addmess from './pages/Addmess.js';

function App() {
  return (
    <div className="wrapper">
      <h1>home</h1>
      <BrowserRouter>
        {/* <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/Addmess">Addmess</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Register" element={<Register />}/>
          <Route path="/Addmess" element={<Addmess />}/>
         <Route path="/Add_menu" element={<Add_menu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


