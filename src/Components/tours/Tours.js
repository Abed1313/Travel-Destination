import Tour from './tour/Tour'
import './Tours.css'
import travelData from '../../data/db.json'


function Tours() {
    
    return (
        <>
            
            {
                travelData.map(element => {
                    return (
                        <Tour id={element.id} traveName={element.name} traveImg={element.image} />
                    )
                })
            }

        </>
    )
}

export default Tours;