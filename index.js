const express = require('express');
const app = express();
const port = 4000;

app.use( express.static('build') );
app.use(express.json() );

let submission = [];

app.post('/submit',(req,res)=>{
   submission.push(req.body);
   res.status(201).send('submitted successfully');

});


app.get('/submission',(req,res)=>{
    res.json(submission);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


