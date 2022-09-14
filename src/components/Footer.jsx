export default function Footer(props) {
    return (
        
        <footer className="footer-section">
            <div className="footer-div"></div>
            <h4 className={props.darkMode ? "h4Light" : ""}>more of me here!</h4>
            <p>Github: <a className={` ${props.darkMode ? "underlineLightmode span-underline-lightMode" : "underlineDarkmode span-underline"}` } target="_blank" href="https://github.com/VladeanClaudiu">VladeanClaudiu</a></p>
            <p>LinkedIn: <a className={` ${props.darkMode ? "underlineLightmode span-underline-lightMode" : "underlineDarkmode span-underline"}` } target="_blank" href="https://www.linkedin.com/in/claudiu-vladean-652614191/">Claudiu Vladean</a></p>
            
        </footer>
    )
}