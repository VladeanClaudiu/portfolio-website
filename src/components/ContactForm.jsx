export default function ContactForm() {
    function handleSubmit(){
        console.log("Submitted")
    }
    return (
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
    )
}