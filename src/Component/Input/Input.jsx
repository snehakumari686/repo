import './Input.css'
function Input(props) {
    return (
        <input type={props.tp} placeholder={props.ph} onChange={props.onChange} name={props.name}  />
    )

}
export default Input