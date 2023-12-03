import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from "./Form.module.css"

export const Form = ({onSubmit} ) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const nameId = nanoid()
  const tagId = nanoid()

  const handleChange = e => {
    const { name, value } = e.currentTarget

    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      name,
      number,
    });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.form__container}>
          <label htmlFor={nameId}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={css.form__input}
            id={nameId}
            value={name}
            onChange={handleChange}
            required
            pattern={"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
          />
        </div>
        <div className={css.form__container}>
          <label htmlFor={tagId}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            className={css.form__input}
            id={tagId}
            value={number}
            onChange={handleChange}
            required
            pattern={"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}
            />
          </div>
        <button type="submit" className={css.form__btn}>Add contact</button>
      </form>
    );
}
