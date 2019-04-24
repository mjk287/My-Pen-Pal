/*------------------- Actions -------------------------- */

export const setCurrentUser = (userObj) => ({type: "SET_CURRENT_USER", payload: userObj})

/*------------------- Thunk -------------------------- */

export const getCurrentUser = () => (dispatch) => {
  return fetch("http://localhost:3000/api/v1/current_user", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      }).then(res => res.json())
      .then(parsedRes => {
        dispatch(setCurrentUser(parsedRes.user))
      })
}

export const postUser = (userObj) => (dispatch) => {
  return fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userObj)
  })
  .then(res => res.json())
  .then(userObj => {
    if(!!userObj.message) {
      alert(userObj.message)
    } else {
    localStorage.setItem('token', userObj.jwt)
    dispatch(setCurrentUser(userObj.user))
    }
  })
}

export const postLogin = (userObj) => (dispatch) => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userObj)
  })
  .then(res => res.json())
  .then(userObj => {
    if(!!userObj.message) {
      alert(userObj.message)
    } else {
    localStorage.setItem('token', userObj.jwt)
    dispatch(setCurrentUser(userObj.user))
    }
  })
}
