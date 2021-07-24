import React from "react"
import {Link , NavLink} from 'react-router-dom'


const Navbar =() =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                page 1 </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/page2">
                page 2</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/page3">
                Page 3</Link>
              </li>
              
            </ul>
          </div>
          <Link className="btn btn-light" to="/Users/AddUser">Add User</Link>
        </div>
      </nav>
 
    )
}
export default Navbar;