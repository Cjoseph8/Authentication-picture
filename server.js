require("dotenv").config()
const express =require('express');
const  mongoose  = require('mongoose');

const app =express()

app.use(express.json())

const router =require("./Router/userRouter")
app.use('/api/v1/', router)
const multer = require('multer')
app.use((err, req, res, next)=>{
    if(err instanceof multer.MulterError){
        return res.status(400).json(err.message);

    }
   next()
})

const port =process.env.PORT

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('Server is connected to DATABASE Successfully..')
    app.listen(port, ()=>{
        console.log(`Connection to PORT: ${port} is Successfull...`)
    })
}).catch((err)=>{
    console.log('Error connecting to DATABASE..' +err)
})

    


