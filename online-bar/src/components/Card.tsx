import type { ReactElement } from "react";
import '../styles/Card.css'
import { Link } from "react-router-dom";

interface CardProps {
    img:string;
    title:string;
    id?:string;
}
export const Card = ({img , title, id }:CardProps):ReactElement => {

    return (
        <div className="card h-100" >
        <div className="card-img-wrapper">
        <img src={img} className="card-img-top zoom-img" alt="..."/></div>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`/cocktail/${id}`}>
        <button type="button" className="btn btn-outline-success lato-font">See More</button></Link>
        </div>
        </div>
    )
}