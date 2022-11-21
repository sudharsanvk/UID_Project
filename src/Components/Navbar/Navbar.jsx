import React,{useState,useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
    
  const [data,setData] = useState([])

  const fetchData = async()=>{
      await fetch("http://localhost:4000/uid/",{
        method: "GET",
        headers: {
            'Accept':  'application/json',
           'Content-Type': 'application/json',
           'Cache': 'no-cache'
        },
        credentials: 'same-origin'} )
      .then((data)=>data.json())
      .then((data2)=>{
          console.log(data2.username)
          setData(data2)
      })
  }


  useEffect(()=>{
      fetchData();
  },[])

  return (
    <>
    <nav class="navbar">
    <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><a href="/Home">Home</a></li>
            <li><a href="/studentDetails">Studens List</a></li>
            <li><a href="/newStudent">New Student</a></li>
        </ul>
        <h2 >Bus Fee Management</h2>
    </div>
    </nav>
    </>
  )
}
