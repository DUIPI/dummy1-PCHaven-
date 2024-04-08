import React from 'react'

export default function ShowSocket({ cpu }) {
  return (
    <>
      <div className='p-6 flex space-x-2'>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-800">{cpu.user.name}</span>
              <small className="ml-2 text-sm text-gray-600">{new Date(cpu.created_at).toLocaleString()}</small>
            </div>
          </div>
            <p className="mt-4 text-lg text-gray-900">ID: {cpu.id} CPU name: {cpu.cpu_name} Socket: {cpu.cpu_socket}</p>
        </div>
      </div>
    </>
  )
}