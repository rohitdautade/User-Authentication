const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/userauth';

const app = express();
mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('database connected.....');
        }
    })

app.use(express.json())

const userRouter = require('./router/user');

app.use('/login', userRouter);
app.use('/registraion', userRouter);

app.listen(8000, () => {
    console.log('server start on port 8000')
})