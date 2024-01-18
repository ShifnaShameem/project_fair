import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import photo from '../assets/photo.png'

function Home() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
      navigate('/projects')
  }

  return (
  
    <>
      {/* landing part */}
      <div style={{ height: '90vh', backgroundColor: '#90ee90' }} className='w-100 d-flex justify-content-center align-items-center rounded'>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1 style={{ fontSize: '70px' }} className='fw-bolder text-light mb-3'>
                <i style={{ height: '75px' }} className="fa-solid fa-hands-holding-circle"></i> Project Fair
              </h1>
              <p style={{ textAlign: 'justify' }}>One Stop Destination for all Software Development
               Projects. Where User can add and manage their projects. As well as access all projects 
               available in our website...What are you waiting for!!!</p>

              <Link style={{textTransform:'none'}} className='btn btn-warning mt-3' to={'/login'}>Starts to Explore <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="col-lg-2"></div>

            <div className="col-lg-4">
              <img className='img-fluid' src={photo} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* all projects part */}
      <div className="mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>

        <marquee >
          <div className="d-flex ">
            <div className="project me-5">
              <ProjectCard/>
            </div>
            
          </div>
        </marquee>

        <div className="text-center">
          <button onClick={handleNavigate} className='btn btn-link'>View More Projects</button>
        </div>
      </div>
    </>
  )
}

export default Home