import './index.scss'
import LogoTitle from '../../assets/images/logo_s.png'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm</h1>
                <img src={LogoTitle} alt="developer" />
                on
                <br />
                developer
            </div>
        </div>
    )
}

export default Home