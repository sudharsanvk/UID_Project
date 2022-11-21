import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'

export default function HomePage() {
  return (
   <>
        <Navbar/>
       <div class=" flip-card">
        <div class="content">
          <div class="front">
            Welcome to Bus Fee Management
          </div>
          <div class="back">
            {/* Back! */}
          </div>
        </div>
      </div>
   </>
  )
}
