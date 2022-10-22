const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express"); 
const app = express();
// var popup = require('popups');

const {Client} = require('pg');

const client = new Client({
host:"localhost",
user:"postgres",
port:5432,
password:"kotA@123",
database:"mesSdata"
})



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


client.connect();

app.post("/api/insert",(req,res)=>{

const pname = req.body.nme;
const pemail = req.body.eml;
const pphn = req.body.phn;
const ptos = req.body.tos;
const ppass = req.body.pass_w;

client.query(
    `INSERT INTO candidates VALUES('${pname}', '${pemail}' , '${pphn}' , '${ptos}' , '${ppass}')` ,(err,res)=>{
// console.log(err.severity);

    } );

})


app.post("/api/broad",(req,res)=>{

    const Mname = req.body.nme;
    const Oemail = req.body.eml;
    const Ophn = req.body.phn;
    const Madd = req.body.address
     
console.log(Mname,Oemail,Ophn,Madd);

    client.query(
        `INSERT INTO messinfo VALUES('${Mname}', '${Oemail}' , '${Ophn}' , '${Madd}')` ,(err,res)=>{
    
    
            // console.log(err);

            // console.log(err.severity);

        } );
    
    })



app.post("/api/edmat",(req,res)=>{

        const dname = req.body.nme;
        const ddesc = req.body.Mdesc;
        const dprice = req.body.Mprice;
         
    console.log(dname,ddesc,dprice);
    
        client.query(
            `INSERT INTO menu_detail VALUES('${dname}', '${ddesc}' , '${dprice}')` ,(err,res)=>{
                // console.log(err);
    
                // console.log(err.severity);
    
            } );
        
        })
    



    
app.listen(3001,()=>{
    console.log("running on port 3001");
})
