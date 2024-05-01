
import './Tours.css'
function Tours(props){
    console.log(11111,props)
    return(
        <>
        <h2>{props.traveName}</h2>
        <div>
        <img src={props.traveImg} alt="traveImg" />
        </div>
        </>
    )
}

export default Tours;