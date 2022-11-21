import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import StudentDetails from '../StudentDetails/StudentDetails';
import InsertStudent from '../InsertStudent/InsertStudent';
import StudentData from '../StudentData/StudentData';
import Login from '../Login/Login';
import Register from '../Register/Register'
import Home from '../../Home/Home';
import StudData from '../../UserComponents/StudentData/StudentData';
import StudDetails from '../../UserComponents/StudentDetails/StudentDetails';


export default function Routing() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/Home" element={<HomePage/>}></Route>
        <Route path="/newStudent" element={<InsertStudent/>}></Route>
        <Route path="/studentDetails" element={<StudentDetails/>} />
        <Route path="/studentData/:id" element={<StudentData/>} />
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

        <Route path="/studDetails" element={<StudDetails/>} />
        <Route path="/studData/:id" element={<StudData/>} />
      </Routes>
      </BrowserRouter>
      </>
  )
}
