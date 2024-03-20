const express = require('express');
const cors = require('cors');
const app = express();
const codeRouter = require ('./routes/code')
require('dotenv').config();

app.use(express.json());
app.use(cors({  
    credentials:true,
    origin:process.env.FRONTEND_URI,
}));

app.use('/', codeRouter);

app.listen(3000);   