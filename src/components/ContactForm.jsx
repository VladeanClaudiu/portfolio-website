import { useRef } from "react";
import { useState } from "react"
import emailjs from "@emailjs/browser"


export default function ContactForm(props) {
    const [status, setStatus] = useState("Submit");
    const form = useRef();

    const handleSubmit = ()=> {
      
    
    }
    return (
        <section>
            <h2 className={`heading2 ${props.darkMode ? "heading2-light" : "heading2-dark"}`}>Say Hi!</h2>
        	
            <p>
                Dont hesitate to message me, I can be reached very easily. Fill in the from below to email me at <span className={`${props.darkMode ? "span-underline-lightMode underlineLightmode" : "span-underline underlineDarkmode"}`}>claudiuver1.0@gmail.com </span>. 
            </p>

            <form className={`contact-form ${props.darkMode ? "form-light" : "form-dark"}`} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required></textarea>
                </div>
                <button className={`contct-btn ${props.darkMode ? "btn-dark" : "btn-light"}`} type="submit">Send Message</button>
            </form>
            <p className="form-paragraph">I am currently looking for a change and recently started applying for Frontend/React developer positions. If I'm a good fit for a role please contact me.</p>
        </section>
       
    )
}