import Card from "../Card/Card"
import Input from "../Input/Input"
import Heading from "../Heading/Heading"
import { Tab } from "../tab/Tab"
import Button from "../Button/Button"
function Signup (){
    return (

        <Card>
            <Heading  title="Signup Form"/>
            <Tab/>
            <Input tp="text" ph="Enter Address"/>
         
            <Input tp="password" ph=" password"/>
            <Input tp="confirm password" ph=" confirm password"/>
            <Button text="Signup" />
            
            
                
            
            
        </Card>
    )
}
export default Signup