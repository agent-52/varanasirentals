import "./CarCard.css"
import stars from "/images/logos/stars.png"

const CarCard = ({name,airportRate, rate1, rate2, rate3, capacity, driverRate, rentName }) =>{

    return(
        <div>
            <div>
                <div><img src="" alt="" /></div>
                <div className="priceBox"><span></span>/</div>
            </div>
            <div>
                <img src={stars} alt="image of stars for review of varanasi rental cars" />
            </div>
            <h1>{name}</h1>
            <div className="break"></div>
            <ul>

                <li>Airport Pick/Drop = {airportRate}</li>
                <li>8Hr/80Km = ₹{rate1}</li>
                <li>12Hr/120Km = ₹{rate2}</li>
                <li>Extra range = ₹{rate3}/Km</li>
                <li>Driver Charge = ₹{driverRate}</li>
                <li>Capacity = {capacity}</li>
            </ul>
            <button className="bookButoon font-medium1 text-sm1">Book {rentName}</button>
        </div>
    )
}

export default CarCard;