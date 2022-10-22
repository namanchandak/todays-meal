import React ,{useState,useEffect} from "react"
import Axios from 'axios'
import './Addmess.css'

export default function Addmess(){


    const [mess_name,setmess_name]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [address,setaddress]=useState('');


    const submitData = ()=>{

        Axios.post("http://localhost:3001/api/broad",{nme:mess_name , eml:email,
       phn:phone,address:address}).then(()=>{
           alert("registration successfull");
       });
        };
       


return(

    <div className="container">

    <div className="text">
        Mess Details
    </div>
    <form action="#">
        <div className="data">
            <label>Name</label>
            <input type="text" name="mess_name" required placeholder="Enter full mess name"  onChange={(e)=>{
                setmess_name(e.target.value)}}/>
        </div>
        <div className="data">
            <label>Email </label>
            <input type="text" name="email" required placeholder="Enter email"  onChange={(e)=>{
                setemail(e.target.value)}}/>
        </div>
        <div className="data">
            <label>Phone number</label>
            <input type="text" name="phone" required placeholder="Enter  Phone number"  onChange={(e)=>{
                setphone(e.target.value)}}/>
        </div>
        <div className="data">
            <label> Address </label>
            <input type="text" name="address" required placeholder="Enter Full Address"  onChange={(e)=>{
                setaddress(e.target.value)}}/>
        </div>

        <div className="btn">
            <div className="inner"></div>
            <button type="submit" onClick={submitData}>Add Mess</button>
        </div>

    </form>
</div>



)

}