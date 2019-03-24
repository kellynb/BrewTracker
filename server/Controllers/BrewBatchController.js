const BrewBatch = require("../Models/BrewBatchModel");

exports.create =  function create(request, response) {
    const newBatch = request.body;

        const newBrewBatch = new BrewBatch(newBatch);
        newBrewBatch.save((err, models) => {
            if (err) return console.error(err);
            return response.json(models);
        })
    
}

exports.update =  function create(request, response) {
    const newBatch = request.body;
    const find = {'number': newBatch.number, 'batch': {$elemMatch : {'id': newBatch.batch.id}}};
    const update ={'$set': {'batch': newBatch.batch}}
    
    BrewBatch.findOneAndUpdate(find, update, (err, models) => {
                            console.log(models)
                        })
    
}