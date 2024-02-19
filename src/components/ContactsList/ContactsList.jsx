import React from 'react'

export default function ContactsList({contacts}) {
  return (
    <div> 
        
        <ul>
        {contacts.map(({id, name, number}) => (
				<li key={id}>{name}: {number}</li>
			))}
        </ul>
    </div>
  )
}

