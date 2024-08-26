import * as yup from "yup";
import { useFormik } from "formik";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FormikErr from "../Errors/FormikErr";
import useApi from "../hooks/useApi";
import UpdateButton from "../components/Buttons/UpdateButton";
import AppServerErr from "../Errors/AppServerErr";

// Form schema
const formSchema = yup.object({
  fullname: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().required("Password is required"),
});

// eslint-disable-next-line react/prop-types
const Register = ({ setShow }) => {
  const { Register, op } = useApi();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: ({ fullname, email, password }) => {
      Register({ fullname, email, password });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <Heading label={"Sign up"} />
      <div className="mt-4">
        {/* Display server errors */}
        <AppServerErr>
          {op.serverErr && op.serverErr !== "Network Error" ? op.serverErr : null}
        </AppServerErr>

        <form className="mt-6" onSubmit={formik.handleSubmit}>
          <Input
            label={"Fullname"}
            type={"text"}
            name={"fullname"}
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormikErr
            touched={formik.touched.fullname}
            errors={formik.errors.fullname}
          />

          <Input
            label={"Email"}
            type={"email"}
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormikErr
            touched={formik.touched.email}
            errors={formik.errors.email}
          />
          <AppServerErr>
            {op.appErr && (op.appErr === "Email already exists, try with a different one") ? op.appErr : null}
          </AppServerErr>

          <Input
            label={"Password"}
            type={"password"}
            name={"password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormikErr
            touched={formik.touched.password}
            errors={formik.errors.password}
          />

          <UpdateButton label={"Register"} />
        </form>

        <p className="mt-8 text-lg font-semibold text-center text-gray-700">
          Already have an account?
          <button
            onClick={() => setShow(false)}
            className="text-lg text-blue-600 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </>
  );
};

export default Register;
