import type { ReactElement } from "react"
import { Link } from "react-router";
interface ItemProps {
    title: string;
    id?: string;
}
export const Item= ({title,id}:ItemProps):ReactElement => {
    return (
      
      <li className="list-group-item d-flex justify-content-between align-items-center">{title}
      <Link to={`/cocktail/${id}`}>
      <button className="btn text-success"> See more ...</button>
      </Link>
      </li>
   
    )
}