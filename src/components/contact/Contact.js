import "./Contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import facebook from "../../img/facebook.png";
import { useRef, useState,useContext } from "react";
import emailjs from "emailjs-com";
// import { useContext, useState } from 'react';
import { ThemeContext } from '../../context'
const Contact = () => {
  const formRef = useRef();

  const Theme = useContext(ThemeContext)
  const darkMode = Theme.state.darkMode

  const [done,setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3v45oq",
        "template_ts5ew7p",
        formRef.current,
        "user_YCDJeB5HOZa8cBCCwW3U6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me at</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon-phone" />
              092 906 8850
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon-email" />
              Jeerawat.taen@gmail.com
            </div>
            <div className="c-info-item">
              <img src={facebook} alt="" className="c-icon-facebook" />
              Wat Jeerawat
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>what's your story?</b>get in touch always available freelancing
            if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black' }} type="text" name="user_name" placeholder="Name" />
            <input style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black' }} type="text" name="user_subject" placeholder="Subject" />
            <input style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black' }} type="text" name="user_email" placeholder="E-mail" />
            <textarea style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black' }} name="message" rows="5" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
            {done && 'thankyou...'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
