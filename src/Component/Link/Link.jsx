import './Link.css'
function Link(props) {
    return (
        <p>{props.text1}<a href={props.url}>{props.text2}</a></p>
       
    )
}
export default Link;