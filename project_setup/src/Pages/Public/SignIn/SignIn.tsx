import { useFormik } from "formik";
import * as Yup from "yup";
import { FormValues } from "../SignIn/SignIn.types";

const SignIn: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
        <button type="submit"> Sign In</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span>
          Sign Up
        </span>
      </p>
    </div>
  );
};
export default SignIn;
