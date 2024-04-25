import Create from './component/Create.jsx';
import Home from './component/Home.jsx';
import Edit from './component/Edit.jsx';
import Signup from './component/Signup.jsx';
import Header from './component/Header.jsx';
import Login from './component/Login.jsx';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/edit' element={<Edit/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Login/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
