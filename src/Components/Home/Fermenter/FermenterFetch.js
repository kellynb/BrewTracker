
export function getFermenters() {
    return fetch("/fermenters", {
        body: JSON.stringify(),
        headers: {
          'content-type': 'application/json'
        },
        method: 'GET'
        })
}