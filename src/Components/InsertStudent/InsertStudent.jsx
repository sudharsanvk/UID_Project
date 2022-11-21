import React from 'react'
import './InsertStudent.css'
import Navbar from '../Navbar/Navbar'

export default function InsertStudent() {
  return (
    <>
        <Navbar/>
         <div className="form-body">
          <h4>Add new Student</h4>
          <form action="http://localhost:4000/newStudent" method="post">
            Name:
            <input class="form-control"  type="text" name="sname" id="" /><br/>
            Roll number:
            <input class="form-control"  type="text" name="rollNo" id="" /><br/>
            Destination:
            <select className='form-select' name="dest" id="">
                <option value="" disabled selected>Select your Destination</option>
                <option value="Erode">Erode</option>
                <option value="Bhavani">Bhavani</option>
                <option value="Tirupur">Tirupur</option>
                <option value="Nasiyanur">Nasiyanur</option>
                <option value="Gobichettipalayam">Gobichettipalayam</option>
                <option value="Chennimalai">Chennimalai</option>
            </select>
            <br/>
            Bus no:
            <select className='form-select' name="bno" id="">
                <option value="" disabled selected>Select your bus number</option>
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
            <br/>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
         </div>
    </>
  )
}
