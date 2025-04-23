import Button from "../Button/Button"
import Heading from "../Heading/Heading"
import Input from "../Input/Input"
import Card from "../Card/Card"
import { useState } from "react";
export function MyForm (){
    const[inputValue,setInputValue]=useState({
        email:'',
        password:'',
        confirm_password:''
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

            <Heading title="Signup Form"/>
            <Input tp="text" name='email' ph="Enter Email" onChange={handleChange}/>
            <Input tp="password" name='password' ph="password" onChange={handleChange}/>
            <Input tp="password" name='confirm_password' ph="confirm_password" onChange={handleChange}/>
            <Button text="submit"/>

            
        </Card>

    )
  
}
 
