import { Carousel } from '../components/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css'
import { Library } from '../components/Library';

export const Home = () => {
    return (
        <div>
            <h1 className="text-center pt-3">Welcome to the Online Bar!</h1>
            <Carousel />
            <Library />
       
        </div>
    )
    }