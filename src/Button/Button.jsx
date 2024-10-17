import { HashLink } from "react-router-hash-link"
import "./Button.css"

const Button = ({text, classArray="button1 text-sm"}) =>{
    return(
        <button className={classArray}>{text}</button>
    )
}

export default Button