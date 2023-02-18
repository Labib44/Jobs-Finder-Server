const express=require('express');
const app =express();
const cors=require('cors');
const port=process.env.PORT || 5000;

app.use(cors());

const fresher=require('./data/fresherDetailsData.json');

app.get('/', (req, res)=>{
    res.send('Api runing');
});

app.get('/fresher-jobs', (req, res)=>{
    res.send(fresher);
})

app.listen(port, ()=>{
    console.log('jobs finder server running on port', port);
    
})