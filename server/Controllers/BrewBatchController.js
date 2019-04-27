const BrewBatch = require("../Models/BrewBatchModel");


exports.create =  function create(request, response) {
    const newBatch = request.body;

    const newBrewBatch = new BrewBatch(newBatch);
    newBrewBatch.save((err, models) => {
        if (err) return console.error(err);
        return response.json(models);
    })
    
}

exports.updateBrew =  function updateBrew(request, response) {
    const newBatch = request.body;
    const find = {'number': newBatch.number};
    const update ={'$push': {
                            'batch': newBatch.batch
                            }   
                  }
    
    BrewBatch.findOneAndUpdate(find, update, (err, models) => {
        if (err) return console.error(err);
        return response.sendStatus(200)
    })
    
}

exports.update =  function update(request, response) {
    const newBatch = request.body;
    const find = {'number': newBatch.number, 'batch': {$elemMatch : {'id': newBatch.batch.id}}};
    const update ={'$set': {
                            'batch.$': newBatch.batch,
                            }   
                    }
    
    BrewBatch.findOneAndUpdate(find, update, (err) => {
        if (err) return console.error(err);
        return response.sendStatus(200)
    })
    
}

exports.find =  function find(request, response) {
    BrewBatch.find({'batch': {$elemMatch : {'submit':false}}}, (err,brewbatch) => {
        if (err) return console.error(err);
        return response.json(brewbatch);
    })    
}

exports.findSubmit =  function findSubmit(request, response) {
    BrewBatch.find({'batch': {$elemMatch : {'submit': true}}}).sort({"number": -1}).exec( (err,brewbatch) => {
        if (err) return console.error(err);
        return response.json(brewbatch[0]);
    })
}