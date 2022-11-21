import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <>
        <div className="log-in">
          
        <div className="admin-log">
          <h3>Login As Admin</h3>

          <form action="http://localhost:4000/login" className='was-validated' method="post" >
              <input type="text" className='form-control' name="username" id="" required placeholder="Admin User Name" />
              <input type="password" className='form-control' name="password" required id="" placeholder='Admin Password' />
              <button type="submit"  class="btn btn-primary">Submit</button>
              <p>Don't Have Account <a href="/register">Register here</a></p>
          </form>
        </div>
        <div className="user-log">
            <a href="http://localhost:3000/studDetails/"><button class="btn btn-primary">Use as student without Login</button></a>
          </div>
        </div>
    </>
  )
}
