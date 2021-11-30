import "./Intro.css";
import me from '../../img/me1.png'
import arrow from '../../img/arrow.png'
function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">HELLO, My name is </h2>
          <h1 className="i-name">Jeerawat Thaenthaisong</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Wep Programmer</div>
              <div className="i-title-item">UI/UX Designer</div>
              
            </div>
          </div>
          <div className="i-desc">
          i design and develop website for learning and improvement my skill
          </div>
        </div>
        <img src={arrow} className='i-arrow' alt='scoll'></img>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={me} alt="" className='i-img'/>
      </div>
    </div>
  );
}

export default Intro;
