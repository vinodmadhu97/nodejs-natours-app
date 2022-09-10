const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const data = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

function getAllTours(req,res){
    res.status(200).json({
        status : 'success',
        result : data.length,
        data : {
            tours : data
        }
    });
}

function getSingleTours(req,res){
    res.json({
        status : req.params.id,
        
    });
}

function addTour(req,res){
    
    
        res.status(201).json({
            status : 'success',
            message : "tour has added   "
        });
    
}

function updateTour(req,res){
    res.json({
        status : true,
        message : `hit the patch request ${req.params.id}`
    });
}

function deleteTour(req,res){
    res.json({
        status : 'success',
        message : `deleted item ${req.params.id}`
    });
}

//app.get("/api/v1/tours",getAllTours);
//app.post('/api/v1/tours',addTour);

//app.get('/api/v1/tours/:id',getSingleTours);
//app.patch('/api/v1/tours/:id',updateTour);
//app.delete('/api/v1/tours/:id',deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(addTour);
app.route('/api/v1/tours/:id').get(getSingleTours).patch(updateTour).delete(deleteTour);

const port = 3000;
app.listen(port,()=>{
    console.log("sever started");
});