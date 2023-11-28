import css from "./Filter.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changedFilter } from 'redux/contacts/contacts.reducer';


export const Filter = () => {
  const dispatch = useDispatch();

  const filterTerm = useSelector(state => state.contactsStore.filterTerm);
  const onChange = e => {
    dispatch(changedFilter(e.target.value));
  };

  return (
    <div className={css.filter__wrapper}>
      <p>Find name</p>
      <input
        type="text"
        name="filter"
        className={css.filter__input}
        value={filterTerm}
        onChange={onChange}
      />
    </div>
  );
};
