const express = require('express');
const app = express();
const port = 3005;
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

/*app.get('/', (req,res) =>{
    res.render('index')
})*/
//Express es un middleware
/*app.get('/person/:id',
    /*Handler -> (req, res) => { 
    res.render('person', {
    ID: req.params.id,
    Qstr: req.query.Qstr
    });
});*/
app.get('/person', (req, res) => {
    res.render('personData');
});

app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thanks');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, (req, res) => {
    res.send('Thanks json');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port, ()=>{
    console.log(`Escuchando el puerto : ${port}`);
})

/*app.get('/person/:id',(req,res)=>{
    console.log(req.params.id);
    res.render('index', { ID: req.params.id });
})*/
/*app.get('/person/:id', (req,res) =>{
    res.render('index',{ID:req.params.id})
})*/
//Conseguir el id 
/*app.get('/person/:id',(req,res)=>{
    console.log(req.params.id);
})*/
/*app.listen(port, ()=>{
    console.log('Listening port 3000');
})*/
