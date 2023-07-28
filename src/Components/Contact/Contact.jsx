import Loader from 'react-loaders';
import './Contact.scss';
import AnimateLetters from '../animateLetters/AnimateLetters';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const  Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const  refForm = useRef()

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'gmail',
            'y_aD•••••••••••••••••',
            refForm.current,
            'pfXuPn8Zh21xALJs4'
        )
        .then(
            () =>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () =>{
                alert('Faild to send the message, please try again')
            }
        )
    }

    return(
        
        <>
            <div className='me-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimateLetters 
                        letterClass={letterClass}
                        strarray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        index={15}
                        />
                    </h1>

                    <p>
                        I am interested in freelance opportunities - especially ambitious or larger projects. However,if you have any request or question, donot hesitate to contact  me using the form below ether.   
                    </p>
                    <div className='form'>
                    <form ref={refForm} onSubmit={sendEmmail}>
                        <ul>
                            <li className='half'>
                            <input type='text' name='name' placeholder='Enter Your Name' required />
                            </li>
                            <li className='half'>
                            <input type='email' name='email' placeholder='Enter Your Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                                <input type='submit' className='btn' value='SEND'/>
                            </li>
                        </ul>
                    </form>

                    </div>

                </div>
            </div>
                <Loader type='pacman' />
        </>
    )
}


export default Contact