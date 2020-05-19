const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3005;

app.listen(port, ()=>{
    console.log(`Escuchando el puerto : ${port}`);
})

mongoose.connect('mongodb://mauri155:Ranita123456@cluster0-shard-00-00-v61pb.mongodb.net:27017,cluster0-shard-00-01-v61pb.mongodb.net:27017,cluster0-shard-00-02-v61pb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', 
{useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true}).catch((err) => {
    if (err) {
        console.log('algo salio mal' + err);
    }else{
        console.log('ALL OKAY')
    }
});

app.get('/', (req, res) => {

    var Schema = mongoose.Schema;
    
    var userSchema = new Schema ({
        userName: String,
        password : String
    });

    var user = mongoose.model('User', userSchema);

    user.find({userName:'Joseph'},function(err,data){
        if (err) {
            console.log('algo salio mal' + err);
        }else{
            res.send(data);
        }
    });
});