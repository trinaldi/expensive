import { useState, useEffect } from 'react'
import { UserType } from '../types'

export const useUsers = () => {
  {
    const [users, setUsers] = useState<UserType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
      fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error(`Error while fetching data: ${err}`)
          setLoading(false)
        })
    }, [])

    return { users, loading }
  }
}
