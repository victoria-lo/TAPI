const newTea = (req, res, next) => {
    res.json({message: "POST new tea"});
};

const getAllTea = (req, res, next) => {
    res.json({message: "GET all tea"});
};



module.exports = {newTea, getAllTea};