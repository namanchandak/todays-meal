import React,{useState,useEffect} from "react"
import './add_menu.css'
import Axios from 'axios'


export default function Add_menu(){

// console.log("i am menu");


const [Dname,setDname]=useState('');
const [Ddesc,setDesc]=useState('');
const [Dprice,setDprice]=useState('');


const submitData = ()=>{
// console.log("fdss");

    Axios.post("http://localhost:3001/api/edmat",{nme:Dname , Mdesc:Ddesc,
   Mprice:Dprice}).then(()=>{
       alert("Menu added successfully");
   });
    };
   

return (

<div className="container">

<div className="text">
    Menu Details
</div>
<form action="#">
    <div className="data">
        <label>Name</label>
        <input type="text" name="Dname" required onChange={(e)=>{
                setDname(e.target.value)}}/>
    </div>
    <div className="data">
        <label>Description</label>
        <input type="text" name="Ddesc" required onChange={(e)=>{
                setDesc(e.target.value)}}/>

    </div>
    <div className="data">
        <label>Price</label>
        <input type="number" name="Dprice" min="0" max="1000" required onChange={(e)=>{
                setDprice(e.target.value)}}/>
    </div>
 

    <div className="btn">
        <div className="inner"></div>
        <button type="submit" onClick={submitData}>Add Menu</button>
    </div>

</form>
</div>


);


}