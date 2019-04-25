const initialState = {
  currentUser: {}
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case "SET_CURRENT_USER":
      return({
          ...state,
          currentUser: action.payload
        })
    case "LOGOUT":
      return({
        ...state,
        ...initialState
      })
    default:
      return state
  }
}

export default reducer
