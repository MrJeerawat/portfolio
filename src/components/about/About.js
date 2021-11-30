import './About.css'
import card from '../../img/card.jpg'
const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={card} alt="" className='a-img' />
                </div>
            </div>
           
            <div className="a-right">
                <h1 className='a-title'> About Me</h1>    
                <p className='a-sub'>
                Freedom is nothing else but a chance to do better.
                </p>
                <p className='a-desc'>
                My name is Jeerawat Thaenthaisong,i live in Nakhon Ratchasima,
                I matriculated in year 2018,
                I studied in Rajamangala University of Technology Isan for 4 years and 1 summer semester,
                I am programmer, I interested in programming, in free time I like listening amine song and play data2  :)
                </p>

            </div>
        </div>
    )
}

export default About
