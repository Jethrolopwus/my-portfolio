import logoTitle from '../../assets/images/logo1.png'
import  {Link} from 'react-router-dom';
import './Home.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../animateLetters/AnimateLetters'
import Loader from 'react-loaders';
import Jethro from '../../assets/images/Jethro.jpg'



const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['J','e', 't', 'h', 'r', 'o'];
    const jobArray = [ 
    'w',
    'e',
    'b',
    'd',
    'e',
    'v',
    'e', 
    'l',
    'o',
    'p',
    'e',
    'r',
    '.'
]


useEffect(() =>{
    setTimeout(() =>{
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])

    return(
        <>
        <div className="Home-page">
       
            <div  className="text-zone">
                <h1>
                    <span className={`${letterClass}`}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                        <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <br/>
                    <img  src={logoTitle} alt="myLogo" />
                    <AnimatedLetters letterClass={letterClass}
                    strarray={nameArray} 
                    index={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strarray={jobArray} 
                    index={22} />
                </h1>
                    <h2>Front End Engineer/JavaScript Expert/ Digital Marketer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
        <Loader type='pacman' />
       
                    <div className='jethro'>
                        <img src={Jethro} alt='jethro' className='jethro' />
                    </div>
        </>
        

    )
}
export default Home;