export default function ContactForm(props) {
    function handleSubmit(){
        console.log("Submitted")
    }
    return (
        <section>
            <h2 className={`heading2 ${props.darkMode ? "heading2-light" : "heading2-dark"}`}>Say Hi!</h2>
        	
            <p>
                Dont hesitate to message me, I can be reached very easily. Fill in the from below and shoot me an email at <span className={`${props.darkMode ? "span-underline-lightMode underlineLightmode" : "span-underline underlineDarkmode"}`}>claudiuver1.0@gmail.com </span>. 
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
       
    )
}