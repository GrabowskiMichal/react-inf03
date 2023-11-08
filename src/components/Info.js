import { useState } from 'react';
import imgOne from '../img/sliderimageone.png';
import './Info.css';

const Info = () => {
    const [currentIndex, setCurrentIndex] = useState();
    return ( 
        <div className="info">
            <h1>Kup najnowsze kursy!</h1>
            <div className="slider">
                <button className="arrow">&larr;</button>
                <img src={imgOne} className="slider-images" alt='slider-image'></img>
                <button className="arrow">&rarr;</button>
            </div> 
        </div>
     );
}
 
export default Info;