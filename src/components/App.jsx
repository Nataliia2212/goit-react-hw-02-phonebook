import React, { Component } from 'react';
import ContactsList from './ContactsList/ContactsList'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export default class App extends Component {
	state = {
		contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
	}

  
  handleSubmit = (newContact) => {
    const {contacts} = this.state;
    this.setState({contacts: [...contacts, newContact]} )

  }

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  getFilteredData = () => {
		const { filter, contacts } = this.state
		return contacts.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )
  }

  render() {
    const { contacts, filter} = this.state;
    const fiterData = this.getFilteredData(contacts);
    return (
      <div>
        <h1>Phoneboock</h1>
        <ContactForm onFormSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChangeInput}/>
        <ContactsList contacts={fiterData}/>
      
    </div>
  );
  }
}

// onSubmit={this.handleSubmit}