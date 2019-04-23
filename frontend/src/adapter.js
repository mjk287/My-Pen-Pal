const fetchSignup = (e, userObj) => {
  e.preventDefault()

  return fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userObj)
  })
  .then(resp => resp.json())
}
