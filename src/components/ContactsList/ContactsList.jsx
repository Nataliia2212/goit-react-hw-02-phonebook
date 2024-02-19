import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactsList({contacts}) {
  return (
    <div> 
        
        <ul>
        {contacts.map((user) => (
				<ContactItem key={user.id} {...user}/>
			))}
        </ul>
    </div>
  )
}

