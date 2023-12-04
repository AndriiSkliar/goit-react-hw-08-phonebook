import { Formik, Form, Field } from "formik";
import css from './FormLogin.module.css'

export const FormLogin = ({onSubmit}) => (
    <Formik
      initialValues={{ userEmail: "", userPassword: "" }}
      onSubmit={onSubmit}
    >
    <div className="container">
      <Form className={css.addContactContainer}>
        <div className={css.contactContainer}>
          <Field
            className={css.inputField}
            id="login-email"
            placeholder="Email"
            type="email"
            name="userEmail"
            autoComplete="on"
            autoFocus
            required
          />
          <label className={css.contactLabel} htmlFor="login-email">Email</label>
        </div>
        <div className={css.contactContainer}>
          <Field
            className={css.inputField}
            id="login-password"
            placeholder="Password"
            type="password"
            name="userPassword"
            autoComplete="on"
            required
            minLength={7}
          />
          <label className={css.contactLabel} htmlFor="login-password">Password</label>
        </div>
        <button className={css.contactBtn} type="submit">Sign In</button>
      </Form>
    </div>
  </Formik>
);
