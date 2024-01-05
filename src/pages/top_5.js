import React from 'react'

const Top_5 = () => {
  return (
    // create top 5 sale table
    <div className='d-flex justify-content-center'>
        <div className='mt-4 w-75'>
        <h1 className='text-center text-uppercase my-4'>top 5 sale</h1>
        <table className='table  my-3 shadow'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Sales Id:</th>
                    <th scope='col'>Product Name</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Sale Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <td>S1212</td>
                    <td>Laptop</td>
                    <td>2</td>
                    <td>90000</td>
                </tr>
                <tr>
                    <th scope='row'>2</th>
                    <td>S4545</td>
                    <td>Mobile</td>
                    <td>5</td>
                    <td>85000</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Top_5