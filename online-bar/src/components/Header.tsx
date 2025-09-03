import type { ReactElement } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom"
import icon from '../assets/icon.png'
import '../styles/Header.css'


export const Header = ():ReactElement => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={icon}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Search</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Info</a>
        </li>
           </ul>
        </div>
      </div>
    </nav>
        
)
}