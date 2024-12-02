import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(true);

   const authInfo = {
      users,
      setUsers,
      loading,
      setLoading
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthProvider
