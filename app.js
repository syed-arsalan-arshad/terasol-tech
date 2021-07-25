const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const rootRoutes = require('./routes/root');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(rootRoutes);
app.use('/api', userRoutes);

mongoose.connect("mongodb://arsalan:FDZEJZQbUannzEjF@cluster0-shard-00-00.akrhh.mongodb.net:27017,cluster0-shard-00-01.akrhh.mongodb.net:27017,cluster0-shard-00-02.akrhh.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-c4rbno-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(result => {
    // console.log(result);
    console.log('Connected!');
    app.listen(port);
})
.catch(err => {
    console.log(err);
});