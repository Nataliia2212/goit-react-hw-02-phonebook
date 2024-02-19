import React from 'react'

export default function ({filter, onChange}) {
  return (
    <div>
        <p>Find contacts by name</p>
        <input type="text" value={filter} name="filter" onChange={onChange}/>
    </div>
  )
}
