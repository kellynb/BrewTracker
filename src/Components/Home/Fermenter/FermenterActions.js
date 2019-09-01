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

                // change order of tanks 
                const orderTank = (data) => {
                    for(let i=0, w=1; w<data.length; i++, w++) {
                        let firstItem = data[i].tank;
                        let secondItem = data[w].tank;
                        
            
                        if(firstItem > secondItem) {
                            let switchObjA = data[i];
                            let switchObjB = data[w]
                            data[w] = switchObjA
                            data[i] = switchObjB
                            orderTank(data)
                        }
                    }
                }
                orderTank(data);

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