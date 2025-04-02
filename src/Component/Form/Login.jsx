import Card from "../Card/Card"
import Input from "../Input/Input"
import Heading from "../Heading/Heading"
import { Tab } from "../tab/Tab"
import Button from "../Button/Button"
import Link from "../Link/Link"

function Login (){
    return (

      
        <Card>
            
            <Heading  title="Login Form"/>
            <Tab />
            <Input tp="text" ph="Enter Address"/>
            <Input tp="password" ph="password"/>
            <Link url="Google.com" text2="forget password?"/>
            <Button text="Login"/>   
            <Link url="Google.com" text1="Not a member?" text2='Signup now'/> 
            
            
            
        </Card>
    )
}
export default Login