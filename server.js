const express = require('express');
const mongoose = require('mongoose');
// const logger = require('morgan');

const PORT = process.env.PORT || 3400;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false

// });

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));


app.listen(PORT, () =>{
    console.log(`App is listening on localhost:${PORT}`);
});