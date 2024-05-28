export default async function (endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
