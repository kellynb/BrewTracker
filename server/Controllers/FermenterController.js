const Fermenter = require("../Models/FermenterModel");

exports.transfer =  function tranfer(request, response) {
    const newBatch = request.body;
    const findTank = {'tank': newBatch.tank};
    const updateTank = {'$set': {
            'number': newBatch.number,
            'style' : newBatch.style,
            'runOff': newBatch.runOff
            },
            '$push': {'bbls': newBatch.batch}
        }  

    Fermenter.findOneAndUpdate(findTank, updateTank, (err) => {
        if (err) return console.error(err);
        return response.sendStatus(200)
    })  
}

exports.list =  function list(request, response) {
    Fermenter.find({}, (err, fermenter) => {
        if (err) return console.error(err);
        return response.json(fermenter);
    })    
}

exports.openTank =  function openTank(request, response) {
    console.log("hi")
    Fermenter.find({'runOff': false}, (err,brewbatch) => {
        if (err) return console.error(err);
        return response.json(brewbatch);
    })    
}
  