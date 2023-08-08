import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useRegisterMutation } from "../../features/api/apiSlice";
import Loading from "../../components/auth/Loading";

export default function Register() {
    const navigate = useNavigate();
    const [registerRequest] = useRegisterMutation();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                await registerRequest(values).unwrap();
                formikHelpers.resetForm();
                formikHelpers.setSubmitting(false);
                toast.success("Register and Login successfully!");
                navigate("/auth");
            } catch (error: any) {
                formikHelpers.setErrors(error.data?.errors ?? {});
                if (!error.data?.errors) {
                    toast.error(error.data?.message ?? "Someting is wrong!");
                }
                formikHelpers.setSubmitting(false);
            }
        },
    });

    return (
        <>
            {formik.isSubmitting && <Loading />}
            <form onSubmit={formik.handleSubmit}>
                {/* Name */}
                <div>
                    <label className="label-gray" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="input-indigo"
                        id="name"
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-sm text-red-600 dark:text-red-400 space-y-1 mt-2">
                            {formik.errors.name}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {/* Email Address */}
                <div className="mt-4">
                    <label className="label-gray" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input-indigo"
                        id="email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-sm text-red-600 dark:text-red-400 space-y-1 mt-2">
                            {formik.errors.email}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {/* Password */}
                <div className="mt-4">
                    <label className="label-gray" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input-indigo"
                        id="password"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-sm text-red-600 dark:text-red-400 space-y-1 mt-2">
                            {formik.errors.password}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {/* Confirm Password */}
                <div className="mt-4">
                    <label
                        className="label-gray"
                        htmlFor="password_confirmation"
                    >
                        Confirm Password
                    </label>
                    <input
                        className="input-indigo"
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password_confirmation}
                    />
                    {formik.touched.password_confirmation &&
                    formik.errors.password_confirmation ? (
                        <div className="text-sm text-red-600 dark:text-red-400 space-y-1 mt-2">
                            {formik.errors.password_confirmation}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {/* <div className="mt-4">
                    <label
                        htmlFor="agree_terms"
                        className="inline-flex items-center"
                    >
                        <input
                            id="agree_terms"
                            type="checkbox"
                            className="checkbox-indigo"
                            name="agree_terms"
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            I agree to your
                            <a
                                href="#"
                                className="text-blue-800 dark:text-blue-400 hover:underline"
                            >
                                Terms
                            </a>
                            ,
                            <a
                                href="#"
                                className="text-blue-800 dark:text-blue-400 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            and
                            <a
                                href="#"
                                className="text-blue-800 dark:text-blue-400 hover:underline"
                            >
                                Cookies Policy
                            </a>
                        </span>
                    </label>
                </div> */}
                <div className="flex items-center justify-end mt-4">
                    <Link
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        to="/auth/login"
                    >
                        Already registered?
                    </Link>
                    <button type="submit" className="btn-blue">
                        Register
                    </button>
                </div>
            </form>
        </>
    );
}
