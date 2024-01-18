import React from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'


function Dashboard() {
  return (
    <>

      <Header insideDashBoard></Header>
      <div style={{ marginTop: '150px' }} className='container'>
        <h1>Welcome <span className='text-warning'>User</span></h1>
        <div className="row mb-4">
          <div className="col lg-8">
            <MyProjects></MyProjects>
          </div>
          <div className="col lg-4">
            <Profile></Profile>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard