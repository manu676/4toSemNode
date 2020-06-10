const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

mongoose.connect('mongodb://mauri155:Ranita123456@cluster0-shard-00-00-v61pb.mongodb.net:27017,cluster0-shard-00-01-v61pb.mongodb.net:27017,cluster0-shard-00-02-v61pb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', 
{useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true}).catch((err) => {
    if (err) {
        console.log('algo salio mal' + err);
    }else{
        console.log('ALL OKAY')
    }
});
var Schema = mongoose.Schema;
        
var userSchema = new Schema ({
    userName: String,
    password : String
});

var user = mongoose.model('User', userSchema);

app.listen(port, ()=>{
    console.log(`Escuchando el puerto : ${port}`);
})

///Raiz / Home
app.get('/',(req, res) => {
    user.find(function(err,data){
        if (err) {
            console.log('algo salio mal' + err);
        }else{
            res.render('home', {data});
        }
    });
});

///Parte de buscar 
app.get('/search', urlencodedParser ,(req, res) => {
    res.render('search')
})
app.post('/search/result', urlencodedParser, (req, res) => {
    let a = req.body.userName    
    //console.log(a);
    user.find({userName: a},function(err,data){
        if (err) {
            console.log('algo salio mal' + err);
        }else{
            res.render('resultSearch', {data});
        }
    })
});

///Parte de insertar 
app.get('/insert', urlencodedParser ,(req, res) => {
    res.render('insert')
})
app.post('/insert/result', urlencodedParser, (req, res) => {
    let a = req.body.userName
    let b = req.body.password   
    let data = user({
        userName : a,
        password : b
    })
    console.log(data)
    res.render('resultInsert', {data});
    data.save();
});

///Parte de borrar
app.get('/delete/:id', urlencodedParser, (req, res) => {
    user.deleteOne({_id : req.params.id},function(err){
        console.log(req.params.id)
        if (err) {
            console.log('algo salio mal' + err);
        }else{
            res.redirect('/')
        }
    })
})

app.get('/edit/:id', urlencodedParser, (req, res) => {
    res.render('edit', {ID : req.params.id })
})

app.post('/edit/result/:id', urlencodedParser, (req, res) => {
        let a = req.body.userName
        let b = req.body.password   
        console.log(a)
        console.log(b)
        console.log(req.params.id )
    user.findOneAndUpdate({_id : req.params.id }, {$set:{userName : a,password : b}},function(err){
        if (err) {
            console.log('algo salio mal' + err);
        }else{
            //{$set:{userName : a}}
            //{$set:{password : b}}
            res.redirect('/')
        }
    })
})
/*app.get('/edit/:id', urlencodedParser, (req, res) => {
    console.log(req.params.id)
    user.findOneAndUpdate({user_id : req.params.id},function(err){
        if (err) {
            console.log('algo salio mal' + err);
        }else{
            res.redirect('/')
        }
    })
})
*/
