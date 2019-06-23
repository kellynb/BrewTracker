import {getFermenters} from './FermenterFetch';

export function getTanks() {
    return function(dispatch) {
        return getFermenters()
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type: "GET_CTANKS",
                    value: data
                })
            })
    }
}