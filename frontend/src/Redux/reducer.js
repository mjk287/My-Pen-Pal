import ActionCable from 'action-cable-react-jwt'

const initialState = {
  currentUser: {},
  cable: {}
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case "SET_CURRENT_USER":
      return({
          ...state,
          currentUser: action.payload,
          cable: ActionCable.createConsumer('ws://localhost:3000/cable', localStorage.getItem('token'))
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
