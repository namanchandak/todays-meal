import React from "react"
import './Home.css'
// import {Link} from

import {Link} from 'react-router-dom';

export default function Home(){

return (
<div>

<nav id="navbar">

<ul>
    <li className="item"><Link to="/">Home</Link></li>
    <li className="item"><a href="#services-container">Services</a></li>
    <li className="item"> <Link to="/Addmess">Addmess</Link></li>
    <li className="item"><a href="#contact">Contact Us</a></li>
    <li className="item"><a href="#Rating">Ratings</a></li>
    <li className="item1"><Link to="/Register">Register</Link></li>
    <li className="item1"><Link to="/Add_menu">AddMenu</Link></li>
    
</ul>
</nav>

<section id="home">
<h1 className="h-primary">Welcome to Today's Meal</h1>
<button className="btn">Order Now</button>
</section>

<section id="services-container">
<h1 className="h-primary center">Our Services</h1>
<div id="services">
    <div className="box">
        <img src="./mess.jpg" alt=""/>
        <h2 className="h-secondary center">View Mess</h2>
        <p className="center">various options  of Mess are available in our site</p>
    </div>
    <div className="box">
        <img src="./rating.png" alt=""/>
        <h2 className="h-secondary center">View Rating</h2>
        <p className="center">You can check every mess rating </p>
    </div>
    <div className="box">
        <img src="./3.png" alt=""/>
        <h2 className="h-secondary center">Food Ordering</h2>
        <p className="center">Order Food From Home</p>
    </div>
</div>

</section>

<section id="contact">
<h1 className="h-primary center">Contact Us</h1>
<div id="contact-box">
    <form action="">
        <div className="form-group">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
            <label for="email">Email: </label>
            <input type="email" name="name" id="email" placeholder="Enter your email"/>
        </div>
        <div className="form-group">
            <label for="phone">Phone Number: </label>
            <input type="phone" name="name" id="phone" placeholder="Enter your phone"/>
        </div>
        <button className="btn">Submit</button>
    </form>
</div>
</section>

<footer>
<div className="center">
    Copyright &copy; www.Today's Meal.com. All rights reserved!
</div>
</footer>


</div>

);



}