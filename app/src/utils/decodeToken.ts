import { jwtDecode } from 'jwt-decode'

const decodeToken = (token: string) => {
  try {
    const decoded: any = jwtDecode(token)
    return decoded?.email
  } catch (error) {
    console.error('Invalid token', error)
    return null
  }
}

export default decodeToken
