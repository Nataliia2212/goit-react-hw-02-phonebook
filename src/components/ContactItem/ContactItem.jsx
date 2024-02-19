import React from 'react'

export default function ContactItem({name, number}) {
  return (
    <li>
        {name}: {number}
        <button>Delete</button>
    </li>
  )
}
