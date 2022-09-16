export default function Project(props){
    let propsTools = props.tools.join(" ")
    return (
        <div className="project-card">
            <h2 className={`heading2 ${props.darkMode ? "heading2-light" : "heading2-dark"}`}>{props.title}</h2>
            <h5 className={`heading5 ${props.darkMode ? "heading5-light" : "heading5-dark"}`}>{propsTools}</h5>
            <p>{props.desc}</p>
            <p>My process:</p>
            <ul>
                {props.process.map(item=> {
                return(
                    <li key={item+item.key}>{item}</li>
                )
            })}
            </ul>
            <div className={props.darkMode ? "projectLink-light" : "projectLink-dark"}>
                <a className={props.darkMode ? "span-underline-lightMode" : "span-underline"} href={props.git}>⬅Visit {props.title} Code</a>
                <a className={props.darkMode ? "span-underline-lightMode" : "span-underline"} href={props.link}>Visit {props.title} ➜</a>
            </div>
        </div>
    )
}