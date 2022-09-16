export default function Project(props){
    let propsTools = props.tools.join(" ")
    return (
        <div className="project-card">
            <h2 className={props.darkMode ? "heading2-light" : "heading2-dark"}>{props.title}</h2>
            <h5 className={props.darkMode ? "heading5-light" : "heading5-dark"}>{propsTools}</h5>
            <p>{props.desc}</p>
            <p>My process:</p>
            <ul>
                {props.process.map(item=> {
                return(
                    <li>{item}</li>
                )
            })}
            </ul>
            <div className={props.darkMode ? "projectLink-light" : "projectLink-dark"}>
                <a className={props.darkMode ? "span-underline-lightMode" : "span-underline"} href={props.link}>Visit {props.title} ➜</a>
            </div>
        </div>
    )
}