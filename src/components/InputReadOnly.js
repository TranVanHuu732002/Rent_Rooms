import React from 'react'

const InputReadOnly = ({label,value}) => {
  return (
    <div>
          <label className="font-medium" htmlFor="exactly-address">
            {label}
          </label>
          <input
            id="exactly-address"
            type="text"
            readOnly
            className="p-2 w-full border border-gray-200 bg-gray-100 rounded-md outline-none"
            value={value|| ''}
          />
        </div>
  )
}

export default InputReadOnly