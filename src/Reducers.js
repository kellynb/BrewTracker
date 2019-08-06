

export const cTanks = (state = [], action) =>{
  switch (action.type) {
    case "GET_CTANKS":
      return action.value;
    default:
      return state;
  }
}

export const emptyCTanks = (state = [], action) => {
  switch (action.type) {
    case "EMPTY_CTANKS":
      return action.value;
    default:
      return state;
  }
}

export const selectTank = (state = {}, action) => {
  switch (action.type) {
    case "SET_TANK":
      return action.value
    case "CHANGE_STATUS":
      return {...state, status: "conditioning"};
    default:
      return state;
  }
}