import './projects.scss';
import app from '../../assets/app.png';
import cart from '../../assets/cart.png';
import movie from '../../assets/movie.png';
import rental from '../../assets/rental.png';
const Projects=()=>{
    return(
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
                <div className="project-cards">
                    <div className="cards">
                        <img src={movie} alt='movie-website-img'/>
                        <h3>Movie Search Filter</h3>
                        <a href='https://github.com/Aditya8766/movie-search-filter-react'>checkout</a>
                    </div>
                    <div className="cards">
                    <img src={cart} alt='shopping-cart-website-img'/>
                        <h3>React Shopping Cart</h3>
                        <a href='https://github.com/Aditya8766/react_cart/tree/main'>checkout</a>
                    </div>
                    <div className="cards">
                    <img src={app} alt='app-img'/>
                        <h3>React Native Frontend</h3>
                        <a href='https://github.com/Aditya8766/ReactNativeCourceFromMetaAssisment'>checkout</a>
                    </div>
                    <div className="cards">
                    <img src={rental} alt='rental-website-img'/>
                        <h3>Online Rental System</h3>
                        <a href='https://github.com/Aditya8766/onllineRentalSystem'>checkout</a>
                    </div>
                </div>
                <div className="divider"></div>
        </div>
    );
}
export default Projects;