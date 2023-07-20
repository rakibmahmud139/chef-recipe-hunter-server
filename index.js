const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json');


app.use(cors());



app.get('/', (req, res) => {
    res.send('Chef Recipe is running')
})


// Chef Data
app.get('/chef', (req, res) => {
    res.send(chef);
})



// Chef Details Data
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chefDetails = chef.find(chef => chef._id === id);
    res.send(chefDetails);
})





app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
})