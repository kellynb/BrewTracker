
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