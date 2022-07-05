import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo_s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase } from  '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
       <Link className='logo' to='/'> 
       <img src={Logo} alt="logo" />
       </Link>
       <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"  />
        </NavLink>
       </nav>
       <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jonathan-becher-6ba15b5b/'>
                <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/Mkhsx64'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UC7tG6XWvX4eA82pqkjOkJig/featured'>
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
        </li>
       </ul>
    </div>
)

export default Sidebar