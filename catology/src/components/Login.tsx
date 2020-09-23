import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Login: React.FC = () => {
	interface FormValues {
		email: string;
		password: string;
	}
	const initialValues: FormValues = {
		email: '',
		password: '',
	};
	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('Email not valid').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const formik = useFormik({
		initialValues,
		validationSchema: LoginSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Email</label>
					<input type="email" {...formik.getFieldProps('email')} />
					{formik.touched.email && formik.errors.email ? (
						<div>
							<div>{formik.errors.email}</div>
						</div>
					) : null}
				</div>
				<div>
					<label>Password</label>
					<input type="password" {...formik.getFieldProps('password')} />
					{formik.touched.password && formik.errors.password ? (
						<div>
							<div>{formik.errors.password}</div>
						</div>
					) : null}
				</div>
				<div>
					<button type="submit" disabled={formik.isSubmitting}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
