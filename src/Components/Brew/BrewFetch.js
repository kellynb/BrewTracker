
export function enterBatch(batch) {
    return fetch("/Brew", {
        body: JSON.stringify(batch),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
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

export function getBatch(state) {
  fetch("/Brew", {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json())
      .then(data => {
        if (data[0] != undefined) {
            state.setState({
              number: data[0].number,
              style: data[0].style,
              tank: data[0].tank,
              enter: data[0].enter,
              batch: {
                id: data[0].batch[0].id,
                strikeVolume: data[0].batch[0].strikeVolume,
                mashTemp: data[0].batch[0].mashTemp,
                spargeVolume: data[0].batch[0].spargeVolume,
                startingBrix: data[0].batch[0].startingBrix,
                kettleVolume: data[0].batch[0].kettleVolume,
                whirlPoolVolume: data[0].batch[0].whirlPoolVolume,
                fmVolume: data[0].batch[0].fmVolume,
                notes: data[0].batch[0].notes
              }
            }, () => {
                state.runInterval = setInterval(() => state.updateMetricData(),30000);
              })
             
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
            prevId: data.batch[0].id
          }
      })
    })
}