export default function Project(props){
    let propsTest = props.tools.join(" ")
    console.log(propsTest)
    return (
        <div className="project-card">
            <h2 className={props.darkMode? "heading2-light" : "heading2-dark"}>{props.title}</h2>
            <h5>{propsTest}</h5>
            <p>{props.desc}</p>
            <p>My process:</p>
            <ul>
                {props.process.map(item=> {
                return(
                    <li>{item}</li>
                )
            })}
            </ul>
            <div className={props.darkMode? "projectLink-light" : "projectLink-dark"}>
                <a className={props.darkMode? "span-underline-lightMode" : "span-underline"} href={props.link}>Visit {props.title} ➜</a>
            </div>
        </div>
    )
}