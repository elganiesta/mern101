const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

//initialize the app
const app = express();

//json middleware
app.use(express.json());

//database config
const mongoUrl = require('./config/keys').mongoUrl;
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected !');
}).catch((error) => {
    console.log('ERROR: ', error);
});

//routes
app.use('/api/items' , items);

//server config
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ', port));