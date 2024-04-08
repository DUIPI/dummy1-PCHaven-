import React from "react";

export default function ShowRam({ ram }) {
  return (
    <>
    <b>Memory</b>
      <div className="p-6 flex space-x-2">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-800">{ram.user.name}</span>
              <small className="ml-2 text-sm text-gray-600">
                {new Date(ram.created_at).toLocaleString()}
              </small>
            </div>
          </div>
          <div className="mt-4 text-lg text-gray-900">
            ID: {ram.id} 
            <p>Gen: {ram.memory_gen}</p>
            <p>Socket 1: {ram.mem_socket} </p>
            <p>Socket 2: {ram.mem_socket1} </p>
            <p>Socket 3: {ram.mem_socket2} </p>
            <p>Socket 4: {ram.mem_socket3} </p>
          </div>
        </div>
      </div>
    </>
  );
}
