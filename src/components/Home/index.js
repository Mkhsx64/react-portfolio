import './index.scss'
import LogoTitle from '../../assets/images/logo_s.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm
                <br /><img src={LogoTitle} alt="developer" />
                on
                <br />
                developer</h1>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home