import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({insideDashBoard}) {
  return (
    <Navbar style={{ width: '100%', backgroundColor: '#90ee90', position: 'fixed', top: '0px', zIndex: 5 }}>
      <Container>
        <Navbar.Brand >
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa-brands fa-stack-overflow"></i> <b>Project Fair</b>
          </Link>
        </Navbar.Brand>
        {
          insideDashBoard&&
          <div className="ms-auto">
            <button style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i className="fa-solid fa-gear me-2"></i> Logout</button>
          </div>
        }
      </Container>
    </Navbar>
  )
}

export default Header