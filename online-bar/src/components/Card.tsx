import type { ReactElement } from "react";
import '../styles/Card.css'

interface CardProps {
    img:string;
    title:string;
    //link:string;
}
export const Card = ({img , title }:CardProps):ReactElement => {

    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <button type="button" className="btn btn-outline-success">See More</button>
        </div>
        </div>
    )
}