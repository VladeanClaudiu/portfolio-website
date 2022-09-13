export default function Footer(props) {
    return (
        
        <footer className="footer-section">
            <div className="footer-div"></div>
            <h4 className={props.darkMode ? "h4Light" : ""}>more of me here!</h4>
            <p>Github: <span className="span-underline"><a target="_blank" href="https://github.com/VladeanClaudiu">VladeanClaudiu</a></span></p>
            <p>LinkedIn: <span className="span-underline"><a target="_blank" href="https://www.linkedin.com/in/claudiu-vladean-652614191/">Claudiu Vladean</a></span></p>
            
        </footer>
    )
}