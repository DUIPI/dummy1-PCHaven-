import React from 'react'

export default function ShowSocket({ mobo }) {
  return (
    <>
      <div className='p-6 flex space-x-2'>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-800">{mobo.user.name}</span>
              <small className="ml-2 text-sm text-gray-600">{new Date(mobo.created_at).toLocaleString()}</small>
            </div>
          </div>
            <p className="mt-4 text-lg text-gray-900">ID: {mobo.id} Mobo: {mobo.mobo_name} Socket: {mobo.mobo_socket}</p>
        </div>
      </div>
    </>
  )
}