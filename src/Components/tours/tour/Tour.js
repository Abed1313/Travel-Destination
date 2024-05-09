import { Link } from 'react-router-dom';


function Tour(props) {
    return (
        <>
            <div className='tour'>
               <Link to={`/city/${props.id}`}>
               <h2>{props.traveName}</h2>
                <img src={props.traveImg} alt={props.traveName} />
               </Link>
            </div>
        </>
    )
};
export default Tour;