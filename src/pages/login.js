import React from 'react'

const Login = () => {
  return (
    // create login form using bootstrap
    <div className='d-flex justify-content-center'>
        <div className='mt-3 w-75'>
        <h3 className='text-center text-uppercase'>login form</h3>
            <form className='form mt-3 shadow p-3'>
                <label className='form-label text-muted'>Email</label>
                <input type='email' className='form-control' required/>
                <label className='form-label text-muted'>Password</label>
                <input type='password' className='form-control' required/>
                <div className='d-grid my-4'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login