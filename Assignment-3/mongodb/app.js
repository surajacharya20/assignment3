const express=require("express");
const mongoose=require("mongoose");
const app=express();
const router =require("./router/routes");
const url=require("../mongodb/connect/mongo");
app.use(express.json());
app.use("/users",router);
mongoose.connect(url).then(()=>
app.listen(8080,()=>
console.log("connected to port 8080")
)
)
.catch((err)=>
console.log(err)
);