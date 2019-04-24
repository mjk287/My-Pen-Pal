const initialState = {
  currentUser: {}
}

const reducer = (state=initialState, action) => {
  console.log(action.payload)
  switch(action.type){
    case "SET_CURRENT_USER":
      return({
          ...state,
          currentUser: action.payload
        })
    case "LOGOUT":
      return({
        ...state,
        currentUser: {}
      })
    default:
      return state
  }
}

export default reducer
