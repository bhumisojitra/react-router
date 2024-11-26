import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-dark p-4'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <h1 className='text-white'>MeDiCaL aPPOiNMeNT</h1>
            </div>
            <div>
                <Link to={'/'} className='text-center text-white me-3 text-decoration-none'>FORM</Link>
                <Link to={'/view'} className='text-center text-white text-decoration-none me-3'>VIEW</Link>
                <Link to={'/pending'} className='text-center text-white text-decoration-none me-3'>PENDING</Link>
                <Link to={'/accepted'} className='text-center text-white text-decoration-none me-3'>ACCEPTED</Link>
                <Link to={'/completed'} className='text-center text-white text-decoration-none'>COMPLETED</Link>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
