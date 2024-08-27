import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div>About Page</div>
      <div>
        <div className='w-80'>
          <Link to='/about/aboutcompany'>
            <button className='btn btn-primary btn-md mr-2'>About Company</button>
          </Link>
          <Link to='/about/aboutteam'>
            <button className='btn btn-primary btn-md mr-2'>About Teams</button>
          </Link>
        </div>
          <Outlet></Outlet>
      </div>

    </>
  )
}
