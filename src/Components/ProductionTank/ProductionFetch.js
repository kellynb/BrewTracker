

export function updateFermentation(data,tank,batch) {
    return fetch(`/fermenters/${tank}/brew/${batch}`, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'PUT'
      }).catch(err => {
        console.error('Request failed', err)
      })
} 