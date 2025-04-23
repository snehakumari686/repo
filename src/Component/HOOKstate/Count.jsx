import { useState } from "react"
export function Count(){
  const [a,setA] = useState(1)
  return(
 <>
    <h1> {a}</h1>
    <button onClick={()=>{setA(a+1)}}>increase</button>
    <button onClick={()=>{setA(a-1)}}>decrease</button>
 </>
  )
}