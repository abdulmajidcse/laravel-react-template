import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useLoginMutation } from "../../features/api/apiSlice";
import Loading from "../../components/auth/Loading";

export default function Login() {
    const navigate = useNavigate();
    const [loginRequest] = useLoginMutation();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: "",
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                await loginRequest(values).unwrap();
                formikHelpers.resetForm();
                formikHelpers.setSubmitting(false);
                toast.success("Login successfully!");
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
                <fieldset disabled={formik.isSubmitting}>
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
                    <div className="mt-4">
                        <label
                            htmlFor="remember"
                            className="inline-flex items-center"
                        >
                            <input
                                id="remember"
                                type="checkbox"
                                className="checkbox-indigo"
                                name="remember"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.remember}
                            />
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                Remember me
                            </span>
                        </label>
                        {formik.touched.remember && formik.errors.remember ? (
                            <div className="text-sm text-red-600 dark:text-red-400 space-y-1 mt-2">
                                {formik.errors.remember}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <a className="link-gray" href="#">
                            Forgot password?
                        </a>
                        <button type="submit" className="btn-blue">
                            Log In
                        </button>
                    </div>
                    <div className="flex justify-center mt-4 border-t border-gray-300 dark:border-gray-500">
                        <Link
                            to="/auth/register"
                            className="mt-3 btn-purple ml-4"
                        >
                            Create New Account
                        </Link>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
