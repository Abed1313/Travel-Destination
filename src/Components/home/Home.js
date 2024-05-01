import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Tours from '../tours/Tours.js';

const travelData = require('/home/abdelradwan/travel-destination/src/data/db.json')

function Home (){
    console.log(travelData[0])

    return(
        <>
    <Header/>
    
    {/* <Tours traveName = {travelData[0].name} traveImg = {travelData[0].image} /> */}
    {
        travelData.map(element=>{
             return(
                <Tours traveName = {element.name} traveImg = {element.image}/>
             )
        })
    }
    <br></br><br></br><br></br>
    <Footer/>
    </>
    )
}

export default Home;