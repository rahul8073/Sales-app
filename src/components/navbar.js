import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbars = () => {
  return (
    <div>

    {/* navbar created */}
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  {/* navlink use to redirect api  */}
    <NavLink className="navbar-brand text-uppercase" to='/'>Sales app</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/addsales'>add sales</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/top5'>Top 5 sales</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to='/totalRevenue'>Todays total revenue</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to='/login'>login</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to='/registration'>register</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>logout</NavLink>
        </li>  
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbars;