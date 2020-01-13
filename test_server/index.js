var express = require('express');
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let value;
app.get('/', (req, res) => {
    console.log(req.body);
    
    res.send(value)
});



app.post('/', (req, res) => {
    console.log(req.body);
    value = req.body;
   res.send('ok')
    
})

app.listen(port, () => console.log('app started'));
