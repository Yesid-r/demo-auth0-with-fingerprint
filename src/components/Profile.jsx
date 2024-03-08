import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
    


    return (
        isAuthenticated && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img src={user.picture} alt={user.name} className="rounded-full w-24 h-24 mx-auto" />
                <h2 className="text-2xl font-bold text-center mt-4">{user.name}</h2>
                <p className="text-gray-600 text-center">{user.email}</p>
                <p className="text-gray-600 text-center">Nickname: {user.nickname}</p>
                <p className="text-gray-600 text-center">Email Verified: {user.email_verified ? 'Yes' : 'No'}</p>
                <p className="text-gray-600 text-center">Last Updated: {new Date(user.updated_at).toLocaleString()}</p>
            </div>
        )
    )
}

export default Profile
