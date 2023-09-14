import css from './Contacts.module.css';

function Contacts({ contacts }) {
  return (
    <div>
      <h2 className={css.contactsTitle}>Contacts</h2>

      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
