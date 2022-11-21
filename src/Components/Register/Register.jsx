import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <>
        <div className="register">
            <h3>Register Form</h3>
            <form action="http://localhost:4000/admin/register" className='was-validated' method="post" >
                <input type="text" className='form-control' name="username" id="" required placeholder="Admin User Name" />
                <input type="password" className='form-control' name="password" required id="" placeholder='Admin Password' />
                <button type="submit"  class="btn btn-primary">Submit</button>
                <p>Don you Have Account <a href="/login">Login here</a></p>
            </form>
        </div>
    </>
  )
}

