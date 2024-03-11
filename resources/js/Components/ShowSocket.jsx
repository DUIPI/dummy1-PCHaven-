import React from 'react'

export default function ShowSocket({ socket }) {
  return (
    <>
      <div className='p-6 flex space-x-2'>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-800">{socket.user.name}</span>
              <small className="ml-2 text-sm text-gray-600">{new Date(socket.created_at).toLocaleString()}</small>
            </div>
          </div>
            <p className="mt-4 text-lg text-gray-900">ID: {socket.id} Socket: {socket.socket_name}</p>
        </div>
      </div>
    </>
  )
}
