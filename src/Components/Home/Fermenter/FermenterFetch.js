
export function getFermenters(state) {
    return fetch("/Fermenters", {
        body: JSON.stringify(),
        headers: {
          'content-type': 'application/json'
        },
        method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            state.setState({
              cTanks: data
        })
      })
}