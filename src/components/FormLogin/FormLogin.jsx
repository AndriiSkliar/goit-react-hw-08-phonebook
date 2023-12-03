import { Formik, Form, Field } from "formik";

export const FormLogin = ({onSubmit}) => (
    <Formik
      initialValues={{ userEmail: "", userPassword: "" }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field
          type="email"
          name="userEmail"
          placeholder="hotmail@hotmail.com"
          autoComplete="on"
          autoFocus
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
        <button type="submit">Sign In</button>
      </Form>
    </Formik>
  );
