import {getFermenters} from './FermenterFetch';

export function getTanks() {
    return function(dispatch) {
        return getFermenters()
            .then(response => response.json())
            .then(data => {
                // FIND only empty tanks
                const emptyTanks = data.reduce( (acc,tank) => {
                    if(!tank.runOff) {
                      acc.push(tank.tank);
                    }
                    return acc
                }, [])

                // change order of tanks here
                dispatch({
                    type: "GET_CTANKS",
                    value: data
                })

                dispatch({
                    type: "EMPTY_CTANKS",
                    value: emptyTanks
                })
            })
    }
}

export function setTank(tank,history) {
    return function (dispatch) {
        dispatch({
                type: "SET_TANK",
                value: tank
                })

        history.push(`/ProductionTank/${tank.tank}`)
    }
}