import { Link } from "react-router-dom";

const UserManagement = () => {
	return (
		<>
			<div className="form-control gray-">
				<label htmlFor="hi">Hello user</label>
				<input
					id="hi"
					type="text"
					className="input input-bordered w-full max-w-xs"
					placeholder="hi"
				/>
			</div>
			<Link to={"1"} className="link link-primary">
				Tes 1
			</Link>
		</>
	);
};

export default UserManagement;
