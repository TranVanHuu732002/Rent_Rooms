import React from 'react'

export const InputForm = ( {label ,onChange}) => {
  return (
    <div>
        <label htmlFor='phone' className='text-xs'>{label}</label>
        <input
            type='text'
            id='phone'
            className='outline-none bg-[#e8f0fe] p-2 w-full rounded-md '
        />
    </div>
  )
}

export default InputForm
