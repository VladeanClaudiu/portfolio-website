import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"

export default function About(props) {
    return (
        <div> 
            <Nav 
            handleClick={props.handleClick}/>
            <div className="main-section">
            <Header 
            />
            <main>
               <h1>Hello World, I'm Claudiu</h1>
                <p>
                    I'm a Frontend / React Developer, 
                    I am passionate about creating interactive web apps alongside 
                    problem-solving and learning new technologies by testing myself 
                    and developing <span className="span-underline underline-effect"><a target="_blank" className="underlined-links" href="https://github.com/VladeanClaudiu?tab=repositories">personal projects</a> </span>  in my free time. 
                </p>
                <p>
                    I aim to make my code as reusable as possible and  I enjoy working with CSS and JS due to my love for design, typography and animation.
                </p> 
                <h3>I'm currently...</h3>
                <ul>
                    <li>working on improving my React.js skills, as I search for a new position in Frontend development.</li>
                    <li>working out as much as I can in my free time. Trying to stay fit and strong</li>
                    <li>looking into the riot games api to develop a personal project dashboard, 
                        a place where all my performance stats from every Riot game API</li>
                </ul>
            </main>
            
            
            <Footer />
        </div>
        </div>
        
    )
}