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
    console.log(newBatch.submit)
    const find = {'number': newBatch.number, 'batch': {$elemMatch : {'id': newBatch.batch.id}}};
    const update ={'$set': {
                            'batch': newBatch.batch,
                            'submit': newBatch.submit
                            }   
                  }
    
    BrewBatch.findOneAndUpdate(find, update, (err, models) => {
        if (err) return console.error(err);
        return response.sendStatus(200)
    })
    
}

exports.find =  function find(request, response) {
    console.log('hi');

    // const newBrewBatch = new BrewBatch(newBatch);
    // newBrewBatch.save((err, models) => {
    //     if (err) return console.error(err);
    //     return response.json(models);
    // })
    
}