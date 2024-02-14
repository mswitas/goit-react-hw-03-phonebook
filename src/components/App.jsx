import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { id: nanoid(), name: name, number: number };

    if (this.includesName(name)) {
      alert(`${name} is alreadry in contacts.`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, contact] }
      });
      form.reset();
    }
  }

  handleFilter(e) {
    const filter = e.currentTarget.value;
    this.setState({ filter: filter });
  }
  
  includesName(name) {
    if (this.state.contacts.some(contact => contact.name === name)) {
      return true;
    } else {
      return false;
    }
  }

  deleteContact(e) {
    const id = e.currentTarget.id;
    const newContacts = this.state.contacts.filter(contact => contact.id !== id).map(filteredContact => {
      return filteredContact;
    });
    this.setState({ contacts: newContacts });
  }
  
  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <div>
          <h2>Contacts</h2>
          <Filter onChange={this.handleFilter} />
          <ContactList contacts={contacts} filter={filter} onClick={this.deleteContact} />
        </div>
      </div>
    );
  }
  
  componentDidMount() {
  if (localStorage.getItem("contacts")) {
    this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    }
  }
  
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
}

export default App;
