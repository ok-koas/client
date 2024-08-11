import { useNavigate } from "react-router-dom";

const Error404 = () => {
	const navigate = useNavigate();
	return (
		<section className="flex items-center h-full p-16 bg-gray-100 text-gray-800">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-gray-400">
						<span className="text-primary">404</span>
					</h2>
					<p className="text-xl font-semibold md:text-3xl text-secondary">
						Maaf, halaman yang anda cari tidak ada.
					</p>
					<p className="mt-4 mb-8 text-gray-600">
						Tak apa, anda masih bisa kembali ke halaman sebelumnya.
					</p>
					<button
						className="btn btn-primary w-full"
						onClick={() => navigate(-1)}
						type="button"
					>
						Kembali
					</button>
				</div>
			</div>
		</section>
	);
};

export default Error404;
