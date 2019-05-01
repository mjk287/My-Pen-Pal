import ActionCable from 'action-cable-react-jwt'

const initialState = {
  currentUser: {},
  cable: {},
  penpalMessage: ''
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
      if (!!state.cable.subscriptions.subscriptions[0]){
        state.cable.subscriptions.subscriptions[0].unsubscribe()
      }
      return({
        ...state,
        ...initialState
      })
    case "GOT_ONLINE":
      return({
        ...state,
        currentUser: {
          ...state.currentUser,
          my_penpal: {
            ...state.currentUser.my_penpal,
            online: true
          }
        }
      })
    case "GOT_OFFLINE":
      return({
        ...state,
        currentUser: {
          ...state.currentUser,
          my_penpal: {
            ...state.currentUser.my_penpal,
            online: false
          }
        }
      })
    case "GOT_MESSAGE":
      return({
        ...state,
        penpalMessage: action.payload
      })
    default:
      return state
  }
}

export default reducer
