
export function enterBatch(batch) {
    return fetch("/Brew", {
        body: JSON.stringify(batch),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json()) 
}

export function updateBatch(id, batchObj) {
  setInterval(() => {
  return fetch(`/Brew/${id}`, {
    body: JSON.stringify(batchObj),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT'
  })
  },30000)
}