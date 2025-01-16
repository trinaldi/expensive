import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  userId: string
  name: string
  email: string
}

const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded: DecodedToken = jwtDecode(token)
    return {
      userId: decoded?.userId,
      name: decoded?.name,
      email: decoded?.email,
    }
  } catch (error) {
    console.error('Invalid token', error)
    return null
  }
}

export default decodeToken
