/*------------------- Actions -------------------------- */

export const setCurrentUser = (userObj) => ({type: "SET_CURRENT_USER", payload: userObj})
// export const setMyPosts = (posts) => ({type: "SET_MY_POSTS", payload: posts})
// export const setOurPosts = (posts) => ({type: "SET_OUR_POSTS", payload: posts})

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
  .then(parsedRes => {
    if(!!parsedRes.message) {
      alert(parsedRes.message)
    } else {
    localStorage.setItem('token', parsedRes.jwt)
    dispatch(setCurrentUser(parsedRes.user))
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
  .then(parsedRes => {
    if(!!parsedRes.message) {
      alert(parsedRes.message)
    } else {
    localStorage.setItem('token', parsedRes.jwt)
    dispatch(setCurrentUser(parsedRes.user))
    }
  })
}

export const patchUser = (userObj, id) => (dispatch) => {
  fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: 'PATCH',
    body: userObj
  })
  .then(res => res.json())
  .then(parsedRes => {
    dispatch(setCurrentUser(parsedRes))
  })
}
