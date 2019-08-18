
export function getFermenters() {
  try {
    return fetch("/fermenters", {
        body: JSON.stringify(),
        headers: {
          'content-type': 'application/json'
        },
        method: 'GET'
        })
    } catch (e) {
      console.log(e);
    }
}