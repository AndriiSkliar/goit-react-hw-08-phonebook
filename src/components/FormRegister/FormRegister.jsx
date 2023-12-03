import { Formik, Form, Field } from "formik";

export const FormRegister = ({onSubmit}) => (
  <Formik
    initialValues={{ userEmail: "", userPassword: "", userName: "" }}
    onSubmit={onSubmit}
  >
    <Form>
      <Field
        type="text"
        name="userName"
        placeholder="Enter your name"
        autoComplete="on"
        autoFocus
        required
      />
      <Field
        type="email"
        name="userEmail"
        placeholder="hotmail@hotmail.com"
        autoComplete="on"
        required
      />
      <Field
        type="password"
        name="userPassword"
        placeholder="********"
        autoComplete="on"
        required
        minLength={7}
      />
      <button type="submit">Sign Up</button>
    </Form>
  </Formik>
);

