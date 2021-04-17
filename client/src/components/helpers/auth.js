export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('token')
}

export const getPayloadFromToken = () => {
  const token = getTokenFromLocalStorage()
  if ( !token ) return false
  const parts = token.split('.')
  if ( parts.length < 3 ) return false
  return JSON.parse(atob(parts[1]))
}