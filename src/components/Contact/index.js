import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
    })

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                    </h1>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact