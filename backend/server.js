const express=require('express')

const app=express();

const cors=require('cors');


app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use(cors())
//routes

const router=require('./routes/usersrouter.js')
app.use('/',router);

const router2=require('./routes/transactionrouter.js')
app.use('/',router2);

const PORT=process.env.PORT || 9090;

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})