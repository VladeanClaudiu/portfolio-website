export default function Header(props) {
    return (
        <header>
                <span className="initial-logo">CV</span>
                <h2>{props.heading}</h2>
            </header>
    )
}