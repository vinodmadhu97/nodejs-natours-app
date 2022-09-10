

function getAllTours(req,res){
    res.status(200).json({
        status : 'success',
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

module.exports = {
    getAllTours,
    getSingleTours,
    addTour,
    updateTour,
    deleteTour
}