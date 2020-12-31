var express = require('express');
var mongoose = require('mongoose');

var users = require('./routes/api/users');
var profile = require('./routes/api/profile');
var posts = require('./routes/api/posts');

var app = express();

//db connect
var db = require('./config/keys').mongoURL;

//connect to
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connect'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

