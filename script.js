async function buy Airtime(){ let phone=document -getElem entByid("phone"). value:
let network=document.getEle mentByid("network"). value;
 let amount=document.getEle mentByid("amount"). value;
let status=document.getElem entByid("status");
status.innerText="processing...";
try{
let res=await fetch("http:// location:3000/buy",{
method:"POST",
headers:{
"content-Type";
"application/Jason"
}
body:JSON.stringfy({
phone;
Network;
amount;
})
});
let data=await res.json();
status.innerText=
data.message;
 }
}
const express=
reguire("express")
const bodyparser=
reguire("body-parser");
const app=express();

app.use(bodyParser.json());

app.post("/buy".(req.res)=>{const{phone, network, amount}=req.body;

console.log("Buying airtime:". phone, network, amount);

//∆ Here is where real API will go

res.json({
 success: true,
 message:"Airtime purchase successful!"
});
});

 app.listen(3000,()=>{
console.log("server running on part 3000");

});

package.json
{
"name":"ag wada airtime-dapp","version":"1.0.0","main":"server.js","dependencies":{
"express":"^4.18.2","body-parser":"^1.20.2"}
  }
