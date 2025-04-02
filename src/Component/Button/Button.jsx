import './Button.css'
function Button(props) {
    return (
       <div id="Buttton">
        <button className="btn" >{props.text}</button>
       </div>
    )
}
export default Button