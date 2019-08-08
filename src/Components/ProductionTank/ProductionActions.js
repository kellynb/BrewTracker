import { getFermenter } from "./ProductionFetch";

export function setTank(tank) {
    return function (dispatch) {
        return getFermenter(tank)
            .then(response => response.json())
            .then(data => {
                dispatch({
                        type: "SET_TANK",
                        value: data[0]
                        })
                })
    }
}