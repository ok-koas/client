import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Import ikon dari react-icons
import axios from "axios"; // Import Axios
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import getServerURL from "../../util/env-variables/server-url";

const Login = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const formErrors = {};
		const fields = Array.from(new FormData(event.target)).map(([name]) => name);
		for (const field of fields) {
			if (!formData[field].trim()) {
				formErrors[field] = "Field is required";
			}
		}

		return formErrors;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formErrors = validateForm();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
		} else {
			setErrors({});
			axios
				.post(getServerURL(), formData)
				.then((response) => {
					alert(response.data.username);
					console.log("Form submitted successfully:", response.data.username);
				})
				.catch((error) => {
					console.error("There was an error submitting the form!", error);
				});
		}
	};

	return (
		<>
			<div className="container mx-auto sm:px-4 md:py-10 ">
				<div className="bg-neutral shadow-md rounded-lg p-8 max-w-md mx-auto">
					<div className="text-center mb-6">
						<Logo size="4xl" />
						{/* <img src={icon} alt="Login" className="w-48 h-auto mx-auto" />{" "} */}
						{/* Ganti teks dengan gambar */}
					</div>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								className="block text-primary-gray text-sm font-bold mb-2 select-none"
								htmlFor="username"
							>
								Username
							</label>
							<div className="flex items-center border rounded-md">
								<FaUser className="text-primary-gray mx-3" />

								<input
									type="text"
									name="username"
									id="username"
									value={formData.username}
									onChange={handleChange}
									className={`block px-3 w-full text-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
										errors.username ? "border-red-500" : ""
									}`}
									placeholder="muhammad.subardjo"
									required
								/>
							</div>
							{errors.username && (
								<p className="text-red-500 text-xs italic">{errors.username}</p>
							)}
						</div>
						<div className="mb-4">
							<label
								className="block text-primary-gray text-sm font-bold mb-2 select-none"
								htmlFor="password"
							>
								Password
							</label>

							<div className="flex items-center border rounded-md">
								<FaLock className="text-primary-gray mx-3" />
								<input
									name="password"
									type="password"
									id="password"
									value={formData.password}
									onChange={handleChange}
									className={`block px-3 w-full text-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
										errors.password ? "border-red-500" : ""
									}`}
									placeholder="Password"
									required
								/>
							</div>
							{errors.password && (
								<p className="text-red-500 text-xs italic">{errors.password}</p>
							)}
						</div>
						<div className="flex align-middle">
							<input
								id="remember-me"
								type="checkbox"
								className="checkbox checkbox-primary"
								defaultChecked
							/>
							&nbsp;&nbsp;
							<label
								htmlFor="remember-me"
								className="font-semibold text-sm select-none"
							>
								Ingat saya
							</label>
						</div>
						<div className="text-center mt-4">
							<button type="submit" className="btn btn-primary w-full">
								{/* <FaSignInAlt className="text-lg" /> */}
								Masuk
							</button>
						</div>
						<div className="text-center mt-4">
							<div className="divider divider-secondary text-primary-gray text-sm md:text-base">
								Atau
							</div>
						</div>
						{/* <div className="text-center mt-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-accent0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                <FaGoogle className="text-lg" />
                Login with Google
              </button>
            </div> */}
						<div className="flex items-center justify-center mt-4 text-sm md:text-base">
							<span className="text-primary-gray">Belum mempunyai akun?</span>
							<Link
								to="/register"
								className="text-red-500 hover:text-red-700 ml-2 flex items-center"
							>
								Daftar Sekarang
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
