import { Component } from 'react';
import { nanoid } from 'nanoid';
import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isNameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Header />
        <section className="container">
          <Phonebook addContact={this.addContact} />

          <Filter handleFilter={this.handleFilter} filter={this.state.filter} />

          <ContactList
            filteredContacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </section>
      </>
    );
  }
}
