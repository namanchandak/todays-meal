import React , {useState,useEffect}  from "react"
import Axios from 'axios'
import "./Register.css"



export default function Register(){


    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [phone_no,setphoneno]=useState('');
    const [type_of_user,settypeofuser]=useState('');
    const [password,setpassword]=useState('');
    
 const submitData = ()=>{

 Axios.post("http://localhost:3001/api/insert",{nme:name , eml:email,
phn:phone_no,tos:type_of_user,pass_w:password}).then(()=>{
    alert("registration successfull");
});
 };


return (

    <div className="container">

    <div className="text">
        Register
    </div>
    <form action="#">
        <div className="data">
            <label>Name</label>
            <input type="text" name="name" required placeholder="Enter your name" onChange={(e)=>{
                setname(e.target.value)}}/>
        </div>
        <div className="data">
            <label>Email </label>
            <input type="text" name="email" required placeholder="Enter your email" onChange={(e)=>{
                setemail(e.target.value)}}/>
        </div>
        <div className="data">
            <label>Phone number</label>
            <input type="text" name="phone_no" required placeholder="Enter your Phone number" onChange={(e)=>{
                setphoneno(e.target.value)}}/>
        </div>
        <div className="data">
            <label> Create Password</label>
            <input type="password" name="password" required placeholder="Create your Password" onChange={(e)=>{
                setpassword(e.target.value)}}/>
        </div>

<div className="data">
        <label> Type Of User</label>
        <select name = "type_of_user" className="dropdown" onChange={(e)=>{
                settypeofuser(e.target.value)}}>
        <option value = "type" selected>select</option> 
            <option value = "Customer" >Customer</option>
            <option value = "MessOperator">Mess Operator</option>
         </select>

</div>


        <div className="data">
            <label> Confirm Password</label>
            <input type="password" required placeholder="Confirm your Password"/>
        </div>



        <div className="btn">
            <div className="inner"></div>
            <button type="submit" onClick={submitData}>Register</button>
        </div>

    </form>
</div>






);


}