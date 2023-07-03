import React, {useRef, useState} from 'react'
//import { useNavigate } from "react-router-dom"
import emailjs from '@emailjs/browser';
import useScript from "../Components/useScript"
import "./HomePage.css"
import github from "../Assets/github.png"
//import linkedin from "../Assets/linkedin.png"
import personal from "../Assets/Ellipse 1.png"
import mitsuru from "../Assets/mitsuru.png"
import junc from "../Assets/junc.png"
import janelia from "../Assets/janelia.png"
import married from "../Assets/married.png"

export default function HomePage() {
    const form = useRef();
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    const handleChange = event => {
        setMessage(event.target.value);
      };
    const handleChange2 = event => {
        setMessage2(event.target.value);
      };

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jzqo4o7', 'template_c0jt7bj', form.current, 'rPF8IQpqZmsJuXzTx')
          .then((result) => {
              console.log(result.text);
              alert("Email sent! You'll hear back from me soon!");
              document.location.reload();
          }, (error) => {
              console.log(error.text);
              alert("NOT SENT! Make sure all fields are valid and the reCAPTCHA challenge is completed, and try again.")
              
          });
      };
  
      useScript('https://www.google.com/recaptcha/api.js');


  return (
    <div className="main" id="top">
        <div className="introduction-panel">
            <div className="introduction-text">
                <div className="introduction-title">
                    <h1>Cody Coleman</h1>
                </div>
                <div className="introduction-description">
                    <h6>frontend web developer</h6>
                    <p>I am a detail oriented web developer based in Los Angeles, California, who enjoys challenging myself to learn new techniques and skillsets. With a formal education in Physics, I have self taught programming and bring a valuable set of skills and a unique perspective to the field. Please check out my work below!</p>
                    <h5>Find me on</h5>
                    <div className="socials">
                        <a href="https://github.com/marunouchisrv" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
                        {//<img src={linkedin} alt="linkedin" />
                        }
                    </div>
                </div>
            </div>
            <div className="introduction-images">
                <div className="my-photo">
                    <img src={personal} alt="personal" />
                </div>
                <div className="shapes">
                    <svg width="331" height="608" viewBox="0 0 331 608" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="388" width="331" height="220" fill="#0000FF"/>
                        <path d="M0 286.526L331 155V476.474L0 608V286.526Z" fill="#01B7FF"/>
                        <path d="M0 131.526L331 0V16.4741L0 148V131.526Z" fill="#01B7FF"/>
                        <path d="M0 551.526L331 420V436.474L0 568V551.526Z" fill="#0000FF"/>
                        <path d="M0 170.526L331 39V92.4741L0 224V170.526Z" fill="#01B7FF"/>
                    </svg>

                </div>
            </div>
        </div>

        <div className="skill-icons">
            <div className="icon-container">
                <i class='fab fa-css3-alt'></i>
                <i class='fab fa-html5'></i>
                <i class='fab fa-git'></i>
                <i class='fab fa-js-square'></i>
                <i class='fab fa-linux'></i>
                <i class='fab fa-python'></i>
                <i class='fab fa-react'></i>
                <i class='fab fa-markdown'></i>
                <i class='fab fa-google-drive'></i>
            </div>

        
        </div>

        <div className="work" id="work">
            <div className="work-within">
                <h2>Recent Work</h2>
                <div className="my-works">
                    <a href="http://www.mitsurumains.com/" target="blank" rel="noopener noreferrer">
                        <div className="img-box">
                            <img src={mitsuru} alt="mitsurumains" /> 
                        </div>
                    </a>
                    <a href="http://www.juncphotography.com" target="blank" rel="noopener noreferrer">   
                        <div className="img-box">
                        <img src={junc} alt="juncphotography" /> 
                        </div>
                    </a>
                    <a href="http://www.itsjanelia.com/" target="blank" rel="noopener noreferrer">
                        <div className="img-box">
                        <img src={janelia} alt="janelia" /> 
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div className="about" id="about">
            <div className="about-within">
            <h2>About Me</h2>
            <div className="about-panels">
                <div className="about-text">
                    <p>
                        My name is Cody Coleman. I am an aspiring front end engineer looking to learn as many modern and useful programming languages as I possible can. Although I was originally a physics student at Cal Poly Pomona, I found a love for the logic and flow of computer programming and have since put all of my efforts into my true passion.
                        </p>
                        <p>
                        Outside of my passion for my career path, I am a former paid professional competitive gamer and used to be very involved in the marketing scene for competitive games. I still love playing in my spare time as well as spending time with my lovely wife and our funny dog.
                        </p>
                        <p>
                        My biggest influences in this field are friends of mine who have been working in the field self taught and found what they really love to do. I plan to join them soon.
                    </p>
                </div>
                <div className="about-picture">
                    <img src={married} alt="wife and dog" />
                </div>
            </div>
            </div>
        </div>

        <div className="getintouch" id="contact">
            <div className="getintouch-within">
            <h2>Get in Touch</h2>
            <div className="getintouch-form">
                <form ref={form} onSubmit={sendEmail} >
                    <div className="textfield">
                        
                        <input type="text" id="name" name="from_name" value={message} placeholder="Name" onChange={handleChange} required />
                    </div>
                    <div className="textfield">
                        
                        <input type="text" id="email" name="from_email" value={message2} placeholder="Email" onChange={handleChange2} required />
                    </div>
                
                <div className="message">
                    <textarea className="message-input" name="message" placeholder="Message"  ></textarea>
                </div>
                
                <div className="submit">
                    <div class="g-recaptcha" data-sitekey="6Lf80-8mAAAAAExDNCvutRf96jNxnvADzIUOvboQ"></div>
                    <br/>
                    <button disabled={message==="" || message2===""} type="submit"><h4>Send Message</h4></button>
                </div>
                </form>  
            </div>
            </div>
        </div>
      
    </div>
  )
}
