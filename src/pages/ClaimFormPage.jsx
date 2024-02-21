import React from 'react'
import Nav from '../component/Nav'
import FormClaim from '../component/FormClaim'


function ClaimFormPage() {
  return (
    <>
    <Nav/>

    <div className='container-fluid'>
        <div className='d-flex justify-content-center my-3 '>
            <h1 className=''>กรอกแบบฟอร์มเคลม</h1>
        </div>
        <div className='container w-50'>
            <FormClaim/>
        </div>
        
    </div>
    </>
  )
}

export default ClaimFormPage