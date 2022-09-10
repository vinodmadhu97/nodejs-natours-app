function getAllUsers(req,res){
    res.status(200).json({
        status : 'success',
        result : data.length,
        data : {
            tours : data
        }
    });
}

function getSingleUser(req,res){
    res.json({
        status : req.params.id,
        
    });
}

function addUser(req,res){
    
    
        res.status(201).json({
            status : 'success',
            message : "tour has added   "
        });
    
}

function updateUser(req,res){
    res.json({
        status : true,
        message : `hit the patch request ${req.params.id}`
    });
}

function deleteUser(req,res){
    res.json({
        status : 'success',
        message : `deleted item ${req.params.id}`
    });
}

module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    updateUser,
    deleteUser
}