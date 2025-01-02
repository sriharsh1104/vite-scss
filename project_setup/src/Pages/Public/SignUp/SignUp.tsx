import { useFormik } from "formik";
import * as Yup from "yup";
import { FormValues } from "./SignUp.types";

const SignUp: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      Mobile: 0,
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "password must be atleast 6 character")
        .required("password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={formik.handleBlur}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <input
          type="number"
          name="mobile"
          placeholder="Phone Number"
          onChange={formik.handleBlur}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Mobile && formik.errors.Mobile ? (
          <p>{formik.errors.Mobile}</p>
        ) : null}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p>{formik.errors.confirmPassword}</p>
        ) : null}
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
