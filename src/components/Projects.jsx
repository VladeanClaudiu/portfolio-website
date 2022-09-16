import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"

export default function Projects(props) {

    return (
        <section className={props.darkMode? "appSectionLight" : "app-section"}>
            <div> 
                <Nav 
                handleClick={props.handleClick}
                darkMode={props.darkMode}/>
                <div className= {` ${props.darkMode? "mainSection-light" : "main-section"}`}>
                    <Header
                    darkMode={props.darkMode} 
                    heading={"personal work"}
                    />
                    <main>
                    
                    </main> 
                    <Footer 
                    darkMode={props.darkMode} 
                    />
                </div>
            </div>
        </section>
        
        
    )
}