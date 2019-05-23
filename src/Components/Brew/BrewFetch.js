
export function enterBrew(batch) {
    return fetch("/Brew", {
        body: JSON.stringify(batch),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
}

export function enterBatch(batch) {
  return fetch("/Brew", {
    body: JSON.stringify(batch),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
  }).catch(err => {
    console.error('Request failed', err)
  })
}

export function updateBatch(id, batchObj) {
    fetch(`/Brew/${id}`, {
      body: JSON.stringify(batchObj),
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT'
      }).catch(err => {
        console.error('Request failed', err)
      })
}

// Putting batch into a tank. Not sure this is the best organizational practice
export function fillTank(id, batchObj) {
  fetch(`/Tank/${id}`, {
    body: JSON.stringify(batchObj),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
    }).catch(err => {
      console.error('Request failed', err)
    })
}


export function getBatch(state) {
  fetch("/Brew", {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json())
      .then(data => {
        const changeNull = (data) => {
          const batchVal = data[0].batch[data[0].batch.length-1];
          
          for (let val in batchVal) {
            const values = batchVal[val]
            if (typeof values === 'object') {
              batchVal[val] = '';
            }
          }

          return data
        }
       
        if (data[0] !== undefined) {
          changeNull(data);
          const lastBatch = data[0].batch[data[0].batch.length-1];
          state.setState(
            {
              number: data[0].number,
              style: data[0].style,
              tank: data[0].tank,
              batch: {
                id: lastBatch.id,
                strikeVolume: lastBatch.strikeVolume,
                mashTemp: lastBatch.mashTemp,
                spargeVolume: lastBatch.spargeVolume,
                startingBrix: lastBatch.startingBrix,
                kettleVolume: lastBatch.kettleVolume,
                whirlPoolVolume: lastBatch.whirlPoolVolume,
                fmVolume: lastBatch.fmVolume,
                notes: lastBatch.notes,
                enter: lastBatch.enter,
                submit: lastBatch.submit
              }
            },
            () => {
              state.runInterval = setInterval(
                () => state.updateMetricData(),
                30000
              );
            }
          );
        } else {
          getLastSubmit(state);
        } 
      }) 
}

function getLastSubmit (state) {
  fetch("/Brewsubmit", {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  }).then(response => response.json())
    .then(data => {
        state.setState({
          prevNum: data.number,
          prevStyle: data.style,
          prevTank: data.tank,
          batch: {
            ...state.state.batch,
            prevId: data.batch[data.batch.length-1].id
          }
      });
        getTanks(state)
    })
}

function getTanks (state) {
  fetch("/OpenTanks", {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  }).then(response => response.json())
    .then(data => {
        const tankList = [];
        data.forEach(tank => {
          tankList.push(tank.tank)
        })
        state.setState({
          tanks: tankList
        })
     
    })
}