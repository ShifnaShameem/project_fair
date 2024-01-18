import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import pro from '../assets/pro.png'

function Profile() {

  const [open, setOpen] = useState(false);

  return (
    <div className='border rounded p-2'>
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'> <i className='fa-solid fa-caret-down'></i></button>
      </div>
      <Collapse in={open}>
        <div className='text-center' id="example-collapse-text">
          <label>
            <input type="file" style={{ display: 'none' }} />
            <img width={'150px'} height={'200px'} className='img-fluid round-circle' src={pro} alt="upload profile pic" />
          </label>

          <form >
            <div className='mb-2'>
              <input type="text" className='rounded p-1 w-75' placeholder='Enter your Github Link Here' />
            </div>
            <div className='mb-2'>
              <input type="text" className='rounded p-1 w-75' placeholder='Enter your LinkedIn Link Here' />
            </div>
            <div className='mb-3 d-grid w-75 mx-auto'>
              <button className='btn btn-warning'>UPDATE</button>
            </div>
          </form>

        </div>
      </Collapse>
    </div>
  )
}

export default Profile