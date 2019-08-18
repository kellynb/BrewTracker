

export function updateFermentation(data,tank,batch) {
    return fetch(`/fermenters/${tank}/brew/${batch}`, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'PUT'
      })
}

export function getFermenter(tank) {
  return fetch(`/fermenters/${tank}`, {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    })
}

export function clearFermenter(tank,batch,data) {
  return fetch(`/fermenters/${tank}/transfer/${batch}`, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT'
    })
} 