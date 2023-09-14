import css from './Phonebook.module.css';
import Contacts from 'components/Contacts/Contacts';

function Phonebook({ handleChange, name, handleSubmit, contacts }) {
  return (
    <div className="container">
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={`form-control ${css.contactInput}`}
          id="floatingInputValue"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          required
        />
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>

      <Contacts contacts={contacts} />
    </div>
  );
}

export default Phonebook;
