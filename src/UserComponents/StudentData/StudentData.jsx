import React,{useState,useEffect} from 'react'

import {useParams} from 'react-router-dom'

import './StudentData.css'



export default function StudentData() {
  const [student,setStudent] = useState([])
  const [fees,setFees] = useState("")
  const {id} = useParams();
  console.log(id)
  const getData = async()=>{
      
      await fetch(`http://localhost:4000/student/${id}`,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        },
        method:'get'
      }) 
      .then((obj)=>obj.json()) 
      .then((value)=>{
          setStudent(value);
          // console.log("first")
          // console.log(student)
          // console.log("first")

          if(student.dest.includes("Bhavani"))
          {
            console.log("first")
            setFees("8000")
          }
          // if(student.dest === "Erode")
          //   setFees("8000")
          // if(student.dest === "Tirupur")
          //   setFees("12000")
          // if(student.dest === "Nasiyanur")
          //   setFees("7000")
          console.log(student.dest=="Bhavani")
      })  
  }

  useEffect(()=>{
      getData();
  },[id])


  return (
    <>

        <div className="stud-data container">
          <div className="content">
          <h5 className='detail'>Name : {student.sname}</h5>
          <h6 className='detail'>Bus Number : {student.bno}</h6>
          <h6 className='detail'>Destination : {student.dest}</h6>
          <h6 className='detail'>Roll Number : {student.rollNo}</h6>
          
          {
            (function(){

              if(student.status=='yes')
              {
                return(
                  <h5 style={{color:'green'}}>Paid</h5>
                )
              }
              else{
                return(
                  <>
                  <h5 style={{color:'red'}}>Not Paid</h5>
                  <form action={`http://localhost:4000/update/${student._id}`} method="post">
                    <button type='submit' className='btn btn-success'>Pay {fees}</button>
                  </form>
                  </>
                )
              }
            }())
          }


          </div>
        </div>
    </>
  )
}
