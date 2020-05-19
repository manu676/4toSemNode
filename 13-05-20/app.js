const mongoose = require('mongoose');

mongoose.connect('mongodb://mauri155:Ranita123456@cluster0-shard-00-00-v61pb.mongodb.net:27017,cluster0-shard-00-01-v61pb.mongodb.net:27017,cluster0-shard-00-02-v61pb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', 
{useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true}).catch((err) => {
    if (err) {
        console.log('algo salio mal' + err);
    }else{
        console.log('ALL OKAY')
    }
});

var Schema = mongoose.Schema;


///Definir los nuevos Schema
var userSchema = new Schema ({
    userName: String,
    password : String
});

var candySchema = new Schema({
    candyName: String,
    candyQuiantity : Number,
    candyDescription : String
});

var user = mongoose.model('User', userSchema);
var candy = mongoose.model('Candy',candySchema);

/// LISTA DE USARIOS 

var joseph = user({
    userName : 'Joseph',
    password : 'Ran15963'
});

/*
joseph.save();
*/


///// LISTA DE DULCES 
var duvalin = candy({
    candyName: 'Duvalin trisabor',
    candyQuiantity : 24,
    candyDescription : 'Duvalin sabor: choco,fresa,vainilla'
})

var mazapan = candy({
    candyName: 'Mazapan',
    candyQuiantity : 30,
    candyDescription : 'Mazapan grande normal'
})

var bocadin = candy({
    candyName: 'Bocadin',
    candyQuiantity : 50,
    candyDescription : 'Bocadin de chocolate'
})

/*
duvalin.save();
bocadin.save();
mazapan.save();
*/

///Funciones de buscar

////////////Solamente atrae el primero que encuentre
user.findOne({userName:'Joseph'},function(err,data){
    if (err) {
        console.log('algo salio mal' + err);
    }else{
        console.log(data)
    }
});

//////////Todos los que tengan el mismjo criterio
user.find({userName:'Joseph'},function(err,data){
    if (err) {
        console.log('algo salio mal' + err);
    }else{
        console.log(data)
    }
});


