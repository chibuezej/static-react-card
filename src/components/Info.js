import Image from "../assets/meriles.jpeg"
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Info () {
    return(
        <div className="info-section">
           <img src={Image} alt="working-lab" className="image"/>
            <h1>Nmeregini Johnhenry</h1>
            <h3>Frontend Developer</h3>
            <h4>Johnhenrychibueze@gmail.com</h4>
            <button><FontAwesomeIcon icon={faEnvelope} /> Email</button>
        </div>
    )
}

export default Info;