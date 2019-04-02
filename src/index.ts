
fetch('http://127.0.0.1:8889/user/1', {
  mode: 'cors'
})
  .then(async(response) => {
    const json = await response.json()
    console.log(json)
  })
