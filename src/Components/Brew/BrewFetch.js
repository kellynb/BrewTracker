
export function createNewBatch(batch) {
    return fetch(`/brews/${batch.number}/batches/${batch.batch.id}`, {
        body: JSON.stringify(batch),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      }).catch(err => {
        console.error('Request failed', err)
      })
}

export function addNewBrew(batch) {
  return fetch(`/brews/${batch.number}/batches/${batch.batch.id}`, {
    body: JSON.stringify(batch),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
  }).catch(err => {
    console.error('Request failed', err)
  })
}

export function updateBatch(batchObj) {
    return fetch(`/brews/${batchObj.number}/batches/${batchObj.batch.id}`, {
      body: JSON.stringify(batchObj),
      headers: {
        'content-type': 'application/json'
      },
      method: 'PATCH'
      })
}

// Putting batch into a tank. Not sure this is the best organizational practice. Wondering if I can use redux to change the state. Will componentDidMount retrieve information
export function fillFermenters(id, tankObj, batch) {
  return fetch(`/fermenters/${tankObj.tank}/brew/${id}/batch/${batch}`, {
    body: JSON.stringify(tankObj),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
    })
}


export function getBatch() {
  return fetch("/brews", {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json())
}

export function getLastSubmit() {
  return fetch("/brews/lastsubmittal", {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
    })
    .then(response => response.json())
}

export function getTanks() {
  return fetch("/fermenters/open", {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
    })
    .then(response => response.json())
  }

export function deleteBrew(number) {
  return fetch(`/brews/${number}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE'
    })
    .catch(err => {
      console.error('Request failed', err)
    })
}

export function deleteBatch(number, id) {
  return fetch(`/brews/${number}/batches/${id}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE'
    }).catch(err => {
      console.error('Request failed', err)
    })
} 