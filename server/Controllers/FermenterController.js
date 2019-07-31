const Fermenter = require("../Models/FermenterModel");

exports.update =  function update(request, response) {
    const newBatch = request.body;
    const objTank = {
        'temp': newBatch.tankTemp,
        'date': Date()
    }
    const findTank = {'tank': newBatch.tank};
    const updateTank = {'$set': {
            'number': newBatch.number,
            'style' : newBatch.style,
            'runOff': newBatch.runOff,
            'status': newBatch.status
            },
            '$push': {'bbls': newBatch.batch, 
                      'brix': newBatch.brix,
                      'tankTemp': objTank}
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

exports.fermenterUpdate =  function fermenterUpdate(request, response) {
    const updateTank = request.body;
    const findTank = {'tank': request.params.tankNumber};
    const getObjectEntries =  Object.entries(updateTank);

    const updateFermenter = {
        '$set': {},
        '$push':{}
    };

    for (const [key, value] of getObjectEntries) {
        if(key === 'tankTemp' || key === 'fermentingBrix') {
            updateFermenter.$push[key] = value
        } else {
            updateFermenter.$set[key] = value
        }
            
    }

    Fermenter.findOneAndUpdate(findTank, updateFermenter, (err) => {
        if (err) return console.error(err);
        return response.sendStatus(200)
    })

}
  