//db.js

const mongoose = require('mongoose')

// const url = `mongodb+srv://user1234:12345@cluster0.o6kfwgz.mongodb.net/badalNewDataBase`;
const url = `mongodb+srv://badalsingh:X6Z3mUF9dAt82r56@cluster1.fvtquiy.mongodb.net/mernstack?retryWrites=true&w=majority`

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true ,
    // useFindAndModify: false
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })