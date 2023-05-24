import './Sidebar.scss';
import LogoS from '../../assets/images/logo1.png';
import signBoard from '../../assets/images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => (
    <div className='nav-bar'>

        <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={signBoard} alt='logo' />

        </Link>
        <nav>
            <NavLink exact="true"
            className="active" to="/" >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink> 

            <NavLink exact="true"
            className="active about-link" to="/about" >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink> 

            <NavLink exact="true" 
            className="active contact-link" to="/contact" >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink> 
        </nav>

        <ul>
            <li>
                <a target='blank' rel='noreferer' href='https://www.linkedin.com/in/jethro-lopwus-4b3285197/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='blank' rel='noreferer' href='https://github.com/Jethrolopwus'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='blank' rel='noreferer' href='https://web.facebook.com/jethro.lopwus/'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='blank' rel='noreferer' href='https://https://www.tiktok.com/@jethrolopwus?lang=en'>
                    <FontAwesomeIcon icon={faTiktok} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='blank' rel='noreferer' href='https://web.whatsapp.com/'>
                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;