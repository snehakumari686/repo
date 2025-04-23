import Button from "../Button/Button"
import Heading from "../Heading/Heading"
import Input from "../Input/Input"
import Card from "../Card/Card"
import Link from "../Link/Link"
import { useState } from "react";
export function MyForm (){
    const[inputValue,setInputValue]=useState({
        email:'',
        password:'',
       
    });

    const handleChange= (e) => {
        const {name,value} = e.target;
        setInputValue(prevState => ({
            ...prevState,
            [name]:value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted value:',inputValue);
    };

    return(
        <Card onSubmit={handleSubmit}>

            <Heading title="Login Form"/>
            <Input tp="text" name='email' ph="Enter Email" onChange={handleChange}/>
            <Input tp="password" name='password' ph="password" onChange={handleChange}/>
            <Button text="submit"/>
            <Link url="Google.com" text1="Not a member?" text2='Signup now'/> 
            

            
        </Card>

    )
  
}