import css from './Filter.module.css';

function Filter({ handleFilter, filter }) {
  return (
    <div>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        className={`form-control ${css.filterInput}`}
        name="filter"
        onChange={handleFilter}
        value={filter}
      />
    </div>
  );
}

export default Filter;
