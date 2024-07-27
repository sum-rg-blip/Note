import { useState } from "react"
import Form from "./Form"

function Header(){
  const [isopen,setisopen]=useState(false)
  const addbtn =() =>{
    setisopen(true)
  }
  const closebtn =() =>{
    setisopen(false)
  }
  return<div> 
    <div className="flex justify-between sm:px-10 py-4 bg-black"> 
  <h1 className="text-white text-5xl">Note</h1>
  <button onClick={addbtn} className="bg-orange-600 px-8 py-3">Add Note</button>
  </div>
  {
    isopen==true ? <Form close={closebtn}/> : ""
  }
  </div>
}
export default Header