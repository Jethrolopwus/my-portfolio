import './About.scss'
import AnimateLetters from '../animateLetters/AnimateLetters.jsx';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return(
        <>
        <div className='about-page'>
             <div className='text-zone'>
                <h1> 
                    <AnimateLetters 
                    letterClass={letterClass}
                    strarray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    index={15}
                     />
                </h1>
                
                    <p>I'm a highly motivated frond end developer looking forward ro adding value to an IT company </p>
                    <p>  I'm a Tech enthusiates especially front end, web3 and Blockchain technology</p>
                    <p>I'm quitly confident and  good at what i do with more that a year experience</p>
                    
            </div>
            <div className='stage-cube-cont'>
            <div className='cubespinner'>
            <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>

            </div>

            </div>

        </div>
        <Loader type="pacman" />
        </>
    

    
    )
}


export default About;