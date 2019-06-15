const BrewBatch = require("../Models/BrewBatchModel");


exports.create =  function create(request, response) {
    const newBatch = request.body;
    const newBrewBatch = new BrewBatch(newBatch);
    newBrewBatch.save((err, models) => {
        if (err) return console.error(err);
        return response.json(models);
    })
    
}

exports.update =  function update(request, response) {
    const newBatch = request.body;
    
    const find = {'number': request.params.number};
    const update ={'$push': {
                            'batch': newBatch.batch
                            }   
                  }
    
    BrewBatch.findOneAndUpdate(find, update, (err, models) => {
        if (err) return console.error(err);
        return response.sendStatus(200)
    })
    
}

exports.updateBatch =  function updateBatch(request, response) {
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

exports.deleteBrew =  function deleteBrew(request, response) {
    BrewBatch.findOneAndDelete({'number': request.params.number}, (err,brewbatch) => {
        if (err) return console.error(err);
        return response.sendStatus(204);
    })    
}

exports.deleteBatch =  function deleteBatch(request, response) {
    const find = {'number': request.params.number};
    const update= {'$pop': { 'batch': 1}};
    const returnDocument= {returnNewDocument: true};

    BrewBatch.findOneAndUpdate(find, update, returnDocument, (err,brewbatch) => {
        if (err) return console.error(err);
        return response.sendStatus(204);
    })    
}