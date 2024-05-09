import travelData from '../../data/db.json'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './TourDetails.css'



function TourDetails() {

    const { id } = useParams();
    const cityData = travelData.find(x => x.id === id);

    const { name, info, image, price } = cityData;


    const [showMore, setShowMore] = useState(false);

    const useStateForBouton = () => {
        setShowMore(!showMore);
        
    }

   

    return (
        <>
            <Header />
            <div className='TourDet'>
                <h1 className='name'>{name}</h1>
                <img className='img' src={image} alt={name} />
                <h3 className='info'>{showMore ? info : `${info.substring(0, 121)}`}
                    <button className="btn" onClick={useStateForBouton}>{showMore ? "Show Less" : "Show More"}</button>
                    </h3>

                <h3 className='price'>price:{price}</h3>
            </div>
            <Footer />
        </>
    )
};

export default TourDetails;