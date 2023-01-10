import { faGithub, faTwitter, faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer () {
    return(
        <footer className="footer">
            <div>
                <ul>
                <li><FontAwesomeIcon icon={faGithub} color=" #918E9B;" /></li> 
                <li><FontAwesomeIcon icon={faTwitter} color=" #918E9B;" /></li>
                <li><FontAwesomeIcon icon={faInstagram} color=" #918E9B;" /></li>
                <li><FontAwesomeIcon icon={faFacebook} color=" #918E9B;" /></li>
                <li><FontAwesomeIcon icon={faLinkedin} color=" #918E9B;" /></li>
                </ul>
            </div>
           
        </footer>
    )
}

export default Footer;