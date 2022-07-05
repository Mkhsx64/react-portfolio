import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGitAlt, faJs, faSass, faPython, faHtml5 } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    })

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a very ambitious and motivated learner looking 
                    for a role in a company with the opportunity to 
                    work with the latest technologies on challenging 
                    and diverse projects.</p>
                <p>I'm quietly confident, naturally curious, and 
                    perpetually working on improving one problem 
                    at a time.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#FF5733" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faGitAlt} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJs} color="#FCFA65" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color="#4BA6F7 " />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color="#097A28 " />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faSass} color="#FC78D3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About