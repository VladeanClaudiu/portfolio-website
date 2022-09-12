import Sun from '../assets/sun.svg'

export default function Nav() {
    return(
        <nav className="nav-section">
            <ul className="nav-elements">
                <li>
                    <a className="nav-element" href="">about</a>
                </li>
                <li>
                    <a className="nav-element" href="">projects</a>
                </li>
                <li>
                    <a className="nav-element" href="">contact</a>
                </li>
                <li>
                    <a className="nav-element" href=""><object className='darkmode-svg' data={Sun}></object></a>
                </li>
            </ul>
        </nav>
    )
}