export default function Header(props) {
    return (
        <header className="header-section">
                <span className={`initial-logo ${props.darkMode? "initialLogo-light" : ""}`}>CV</span>
                <h2>{props.heading}</h2>
        </header>
    )
}