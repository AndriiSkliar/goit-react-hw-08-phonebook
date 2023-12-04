import { Formik, Form, Field } from "formik";
import css from './FormRegister.module.css'

export const FormRegister = ({onSubmit}) => (
  <Formik
    initialValues={{ userEmail: "", userPassword: "", userName: "" }}
    onSubmit={onSubmit}
  >
    <div className="container">
      <Form className={css.addContactContainer}>
        <div className={css.contactContainer}>
          <Field
            className={css.inputField}
            id="register-name"
            placeholder="Name"
            type="text"
            name="userName"
            autoComplete="on"
            autoFocus
            required
          />
          <label className={css.contactLabel} htmlFor="register-name">Name</label>
        </div>
        <div className={css.contactContainer}>
          <Field
            className={css.inputField}
            id="register-email"
            placeholder="Email"
            type="email"
            name="userEmail"
            autoComplete="on"
            required
          />
          <label className={css.contactLabel} htmlFor="register-email">Email</label>
        </div>
        <div className={css.contactContainer}>
          <Field
            className={css.inputField}
            id="register-password"
            placeholder="Password"
            type="password"
            name="userPassword"
            autoComplete="on"
            required
            minLength={7}
          />
          <label className={css.contactLabel} htmlFor="register-password">Password</label>
        </div>
        <button className={css.contactBtn} type="submit">Sign In</button>
      </Form>
    </div>
  </Formik>
);

