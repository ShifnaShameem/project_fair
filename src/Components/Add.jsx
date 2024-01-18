import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import upload from '../assets/upload.png'

function Add() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <button onClick={handleShow} style={{ textDecoration: 'none' }} className='btn btn-link text-warning d-flex
 align-items-center fw-bolder'><i style={{ height: '34px' }} className="fa-solid fa-plus fa-2x"></i>Add Projects</button>

      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label className='w-100 d-flex align-items-center flex-column justify-content-center'>
                <input type="file" style={{display:'none'}} />
                <img height={'200px'} width={'200px'}  className='mt-3' src={upload} alt="project upload pic" />
              </label>
            </div>

            <div className="col-lg-8">
              <div className="mb-3">
                <input className='border rounded p-2 w-100' type="text" placeholder='Project Title' />
              </div>
              <div className="mb-3">
                <input className='border rounded p-2 w-100' type="text" placeholder='Language Used' />
              </div>
              <div className="mb-3">
                <input className='border rounded p-2 w-100' type="text" placeholder='Project Github Link' />
              </div>
              <div className="mb-3">
                <input className='border rounded p-2 w-100' type="text" placeholder='Project Overview' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add