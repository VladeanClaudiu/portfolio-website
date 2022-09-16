export default function Project(props){
    let propsTest = props.tools.join(" ")
    console.log(propsTest)
    return (
        <div className="project-card">
            <h2 className={props.darkMode? "heading2-light" : "heading2-dark"}>{props.title}</h2>
            <h5>{propsTest}</h5>
            <p>{props.desc}</p>
        </div>
    )
}