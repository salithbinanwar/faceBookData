const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const fbData = require('./fbData/fbData')
require('dotenv').config();
const path = require('path');

let port = process.env.PORT;

// app initialization
app.use(cors());
app.use(express.json())
app.use(express.static('build'))

console.log(port)

// mongoose connect
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('db connected');
}).catch(err => console.log(err))


// show data
app.use('/allData', fbData)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})

// app listen

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
