import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"
import Data from "../data/Data"
import Project from "./Project"

export default function Projects(props) {

    const ProjectConst = Data.map((item)=> {
        return <Project 
        key = {item.key}
        darkMode = {props.darkMode}
        title = {item.title}
        tools = {item.builtWith}
        desc = {item.description}
        process = {item.process}
        />
    })

    return (
        <section className={props.darkMode? "appSectionLight" : "app-section"}>
            <div> 
                <Nav 
                handleClick={props.handleClick}
                darkMode={props.darkMode}/>
                <div className= {` ${props.darkMode? "mainSection-light" : "main-section"}`}>
                    <Header
                    darkMode={props.darkMode} 
                    heading={"PERSONAL WORK"}
                    />
                    {ProjectConst}
                    <Footer 
                    darkMode={props.darkMode} 
                    />
                </div>
            </div>
        </section>
        
        
    )
}