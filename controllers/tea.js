//GET teas
const getAllTea = (req, res, next) => {
    res.json({message: "GET all tea"});
};

//POST teas
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"});
};

//DELETE teas
const deleteAllTea = (req, res, next) => {
    res.json({message: "DELETE all tea"});
};

//GET 1 tea
const getOneTea = (req, res, next) => {
    res.json({message: "GET 1 tea with id " + req.params.id});
};

//POST 1 tea comment
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE 1 tea
const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};

//export controller
module.exports = {
    getAllTea, 
    newTea,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea
};