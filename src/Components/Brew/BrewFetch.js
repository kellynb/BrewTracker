
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

export function getBatch() {
  return fetch("/Brew", {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    })
    .then(response => response.json()) 
}