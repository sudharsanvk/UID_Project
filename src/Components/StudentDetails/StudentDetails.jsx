import React,{useState,useEffect} from 'react'
import './StudentDetails.css'
import Navbar from '../Navbar/Navbar'


export default function StudDetails() {
    

    const [student,setStudent] = useState([])
    const [search,setSearch] = useState('')

    const [find,setFind] = useState('')

    const getData = ()=>{
        fetch('http://localhost:4000/allDetails',{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          },
          method:'get'
        }) 
        .then((obj)=>obj.json()) 
        .then((value)=>{
            setStudent(value);
        })  
    }

    useEffect(()=>{
        getData();
    },[])


  return (
    <>
    <Navbar/>
        <div className="container ">
       <div className="search-add">
       <input type="text" className='form-control my-4' onChange={(event)=>{setSearch(event.target.value)}} placeholder='Search by Name / Roll No'/>
       <select className='form-select drop' name="bno" id="" onChange={(event)=>{setFind(event.target.value)}}>
                <option value="" disabled selected>Select your bus number</option>
                <option value="">none</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>

            </select>
        <a href="/newStudent" className='my-4'><button className='btn btn-primary'>Add data</button></a>
       </div>
        <div className="card-group mt-4">
        {
            student.filter((value)=>{return (value.sname.toLowerCase().includes(search.toLowerCase()) && value.bno.toLowerCase().includes(find.toLowerCase())) }).map((stud)=>{
                return(
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h6>Student Name : {stud.sname}</h6>
                            <h6>Bus Number : {stud.bno}</h6>
                            <h6>Destination : {stud.dest}</h6>
                            
                            <a href={`/studentData/${stud._id}`}><button type="button" class="btn btn-primary">View</button></a>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
        <div style={{"margin-bottom":"40px"}}></div>
    </>
  )
}
