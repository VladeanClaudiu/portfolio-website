import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"
import ContactForm from "./ContactForm"

export default function Contact(props) {

    return(
        <section className={props.darkMode? "appSectionLight" : "app-section"}>
            <div> 
                <Nav 
                handleClick={props.handleClick}
                darkMode={props.darkMode}/>
                <div className= {` ${props.darkMode? "mainSection-light" : "main-section"}`}>
                    <Header
                    darkMode={props.darkMode} 
                    heading={"REACH OUT"}
                    />
                    <ContactForm 
                    darkMode={props.darkMode}
                    />
                    <Footer 
                    darkMode={props.darkMode} 
                    />
                </div>
            </div>
        </section>
    )
}