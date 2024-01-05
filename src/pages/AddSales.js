// import react from react library
import React from 'react';

const AddSales = () => {
  return (
    // create sale entry form
<div className='d-flex justify-content-center ' >
        <form className='form my-4 w-75 shadow p-3'>
            <h1 className='text-center text-uppercase mb-5'>add sale entry</h1>
            <label className='form-label text-muted '>Product Name</label>
            <input type='text' className='form-control mb-3'/>
            <label className='form-label text-muted'>Quantity</label>
            <input type='num' className='form-control mb-3'/>
            <label className='form-label text-muted'>Amount</label>
            <input type='num' className='form-control mb-3'/>
            <div className='d-grid mt-3'>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddSales