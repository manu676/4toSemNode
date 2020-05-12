const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

/*app.get('/', (req,res) =>{
    res.render('index')
})*/

app.get('/person/:id', (req, res) => { 
    res.render('person', {
    ID: req.params.id,
    Qstr: req.query.Qstr
    });
});

/*app.get('/person/:id',(req,res)=>{
    console.log(req.params.id);
    res.render('index', { ID: req.params.id });
})*/

/*app.get('/person/:id', (req,res) =>{
    res.render('index',{ID:req.params.id})
})*/
app.listen(port, ()=>{
    console.log(`Escuchando el puerto : ${port}`);
})


//Conseguir el id 
/*app.get('/person/:id',(req,res)=>{
    console.log(req.params.id);
})*/
/*app.listen(port, ()=>{
    console.log('Listening port 3000');
})*/
