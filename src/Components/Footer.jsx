import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (

    <div style={{ width: '100%', backgroundColor: '#90ee90' }} >

      <Container className='p-3 text-white'>
        <Row className='w-100 container'>

          <Col lg={3} md={3} >
            <h4 className='fw-bolder text-light'><i className="fa-solid fa-hands-holding-circle"></i> Project Fair</h4>
            <h6>Designed and built with all the love in the world by the Luminar Sep23 Batch team with the help of our contributors.</h6>
            <h6>Code licensed MIT, docs CC BY 3.0.</h6>
            <p>Currently v1.0.0.</p>
          </Col>

          <Col lg={3} md={3}  >
            <h4>Links</h4>
            <a href="./" style={{ textDecoration: 'none', color: 'white' }}>Home</a><br />
            <a href="./login" style={{ textDecoration: 'none', color: 'white' }}>Login</a> <br />
            <a href="./register" style={{ textDecoration: 'none', color: 'white' }}>Register</a>
          </Col>

          <Col lg={3} md={3} >
            <h4>Guides</h4>
            <a href={'https://react.dev/'} target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</a><br />
            <a href={'https://react-bootstrap.netlify.app/'} terget='_balank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a><br />
            <a href={'https://www.w3schools.com/react/react_router.asp'} terget='_balank' style={{ textDecoration: 'none', color: 'white' }}>Routing</a>
          </Col>

          <Col lg={3} md={3}>
            <h4>Contact Us</h4>
            <div className='sub d-flex mt-3'>
              <input type="text" className='form-control bg-white p-2' placeholder='Enter your Email Id' />
              <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className=' fs-5 mt-3'>
              <a href="https://getbootstrap.com/" className='mx-2' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-envelope"></i></a>
              <a href="https://getbootstrap.com/" className='mx-2' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter"></i></a>
              <a href="https://getbootstrap.com/" className='mx-2' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://getbootstrap.com/" className='mx-2' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></a>
              <a href="https://getbootstrap.com/" className='mx-2' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-github"></i></a>
              <a href="https://getbootstrap.com/" className='mx-2' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></a>
            </div>
          </Col>

        </Row>
      </Container>

      <p className='text-center'>Copyright © 2024 Project Fair. Built with React</p>

    </div>

  )
}


export default Footer

