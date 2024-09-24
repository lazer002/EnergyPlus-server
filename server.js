const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors({origin: 'http://localhost:5173',
credentials:true}))

const bodyparser = require('body-parser')
require('dotenv').config();
const router = require('./routes/auth.js')
const cookieParser = require('cookie-parser')
require('./db/config.js')
app.use(cookieParser())
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))

















app.use('/',router)
app.listen(process.env.PORT,()=>{
    console.log('backend running on 9999');
})