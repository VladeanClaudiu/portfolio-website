import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"

export default function About(props) {
    
    return (
    <section className={props.darkMode? "appSectionLight" : "app-section"}>
        <div> 
            <Nav 
            handleClick={props.handleClick}
            darkMode={props.darkMode}/>
            <div className= {`main-section ${props.darkMode? "mainSection-light" : "mainSection-dark"}`}>
            <Header
            darkMode={props.darkMode} 
            />
            <main>
               <h1 className={props.darkMode ? "h1Light" : ""}>Hello World, I'm Claudiu</h1>
                <p>
                    I'm a Frontend / React Developer, 
                    I am passionate about creating interactive web apps alongside 
                    problem-solving and learning new technologies by testing myself 
                    and developing <span className={props.darkMode ? "span-underline-lightMode" : "span-underline"}><a target="_blank" className={props.darkMode ? "underlineLightmode " : "underlineDarkmode"} href="https://github.com/VladeanClaudiu?tab=repositories">personal projects</a> </span>  in my free time. 
                </p>
                <p>
                    I aim to make my code as reusable as possible and  I enjoy working with CSS and JS due to my love for design, typography and animation.
                </p> 
                <h3 className={props.darkMode ? "h3Light" : ""}>I'm currently...</h3>
                <ul>
                    <li>working on improving my React.js skills, as I search for a new position in Frontend development.</li>
                    <li>working out as much as I can in my free time. Trying to stay fit and strong</li>
                    <li>looking into the riot games api to develop a personal project dashboard, 
                        a place where all my performance stats from every game API Riot gives access to</li>
                </ul>
            </main>
            
            
            <Footer 
            darkMode={props.darkMode} 
            />
        </div>
        </div>
    </section>
        
    )
}