import React from 'react'
import './Style.css'

function Jobs() {
  return (
    <div className='Jobs&carrer'>
        <div className='jobs'> 
            <h1>Jobs</h1>
        </div>
        <div className='open'>
            <h2>Open Positions</h2>
        </div>
        <div className='Availbility-jobs'>
                <div className='Availbility-left'>
                <h3>Marketing Manager</h3>
                <p>Full Time Role Gurgaon, 3-4 years</p>
                <a href="#">View Details</a>
                </div>
                <div className='Availbility-right'>
                <h3>Quality Assurance</h3>
                <p>Full Time Role Gurgaon, 3-4 years</p>
                <a href="#">View Details</a>
                </div>
        </div>
    </div>
  )
}

export default Jobs