import { nanoid } from 'nanoid';
// model.id = nanoid();

import { Component } from 'react';
import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };

    this.setState(currState => ({
      contacts: [...currState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    return (
      <>
        <Header />
        <Phonebook
          handleChange={this.handleChange}
          name={this.state.name}
          contacts={this.state.contacts}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}
