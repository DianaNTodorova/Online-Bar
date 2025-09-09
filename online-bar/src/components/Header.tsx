import type { ReactElement } from "react"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom"
import icon from '../assets/icon.png'
import '../styles/Header.css'



export const Header = ():ReactElement => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}><img src={icon}/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" to="/search" >Search</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/info">Info</NavLink>
        </li>
           </ul>
        </div>
      </div>
    </nav>
        
)
}