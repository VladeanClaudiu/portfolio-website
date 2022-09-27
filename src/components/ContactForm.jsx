import { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function ContactForm(props) {
    const form = useRef();

    const handleSubmit = (e) => {
        emailjs.sendForm('service_8174uwe', 'template_wj12e4o', form.current, 'UwV474XqMub50dpil')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    }

    return (
        <section>
            <h2 className={`heading2 ${props.darkMode ? "heading2-light" : "heading2-dark"}`}>Say Hi!</h2>
        	
            <p>
                Dont hesitate to message me, I can be reached very easily. Fill in the from below to email me at <span className={`${props.darkMode ? "span-underline-lightMode underlineLightmode" : "span-underline underlineDarkmode"}`}>claudiuver1.0@gmail.com </span>. 
            </p>
            <div className="from-style-breakpoints">
              <form ref={form} className={`contact-form ${props.darkMode ? "form-light" : "form-dark"}`} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="user_name" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user_email" required/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required></textarea>
                </div>
                <button className={`contct-btn ${props.darkMode ? "btn-dark" : "btn-light"}`} type="submit">Send Message</button>
            </form>
            <p className="form-paragraph">I am currently looking for a change and recently started applying for Frontend/React developer positions. If I'm a good fit for a role please contact me.</p>  
            </div>
            
        </section>
       
    )
}