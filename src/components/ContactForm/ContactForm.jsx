import React, { Component } from 'react';
import { nanoid } from 'nanoid';


export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
	  }
  

    handleSubmit = (e) => {
        e.preventDefault()
        const {name, number} = this.state;
        const {onFormSubmit, contacts} = this.props;
        
        if (contacts.every(contact => contact.name !== name)) {
         const newContact = {name, number, id: nanoid(4)}
        onFormSubmit(newContact)
        this.setState({name: '', number: ''})
    } else {
      return  alert(`${name} is already in contacts`)
    }
  }



    handleChangeInput = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value })
    }

  render() {
    console.log()
    const { name, number} = this.state;
  
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChangeInput} required />
        </label>
        <label>
            Number:
            <input type="tel" name="number" value={number} onChange={this.handleChangeInput} required />
        </label>
                  
        <button>Add contact</button>
      </form>
    )
  }
}


