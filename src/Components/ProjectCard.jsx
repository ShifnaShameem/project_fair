import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import media from '../assets/media-player.jpg';
import {  Col, Modal, Row } from 'react-bootstrap';


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>

      <Card className='shadow mb-5 btn' style={{ width: '18rem' }} onClick={handleShow} >
        <Card.Img variant="top" src={media} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>


      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img  className='img-fluid' src={media} alt="" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className='fw-bolder text-success'>Media Player</h2>
              <p>Project Overview : <span className='fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab ipsa quis beatae culpa. Sapiente assumenda ex corrupti cupiditate. Quos omnis possimus vel nam ad ut nostrum, perspiciatis laudantium odit?</span></p>
              <p>Language Used: <span className=" fw-bolder text-danger">HTML, CSS, JS</span></p>
            </Col>
          </Row>
          <div className='mt-3'>
            <a href="https://github.com/" target='_blank' style={{cursor:'pionter', color:'black'}}> <i style={{height:'34px'}} className='fa-brands fa-github fa-2x '></i></a>
            <a href="https://github.com/ShifnaShameem/react-videos" target='_blank' style={{cursor:'pionter', color:'black'}}> <i style={{height:'34px'}}  className="fa-solid fa-link fa-2x mx-4"></i></a>

          </div>
        </Modal.Body>
      </Modal>
    </>

  )
}

export default ProjectCard