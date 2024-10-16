import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Container className='mt-5'>
        <Link to={'/form'} className="btn text-white ps-4 pe-4 pt-3 pb-3 fw-semibold" style={{backgroundColor: '#1A4870', margin: '0 auto'}}>ADD DATA</Link>
      </Container>
    </div>
  )
}

export default Home
