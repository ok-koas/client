const PasienRegisterButton = () => {
	return (
        <div className="mt-6">
            <div className="inline-flex">
                <button
                    className="btn btn-primary rounded-l-full border-r-0"
                    type="button"
                ><a href="/login">Daftar Sekarang</a>
                </button>
                <button
                    className="btn btn-outline rounded-r-full border-l-0"
                    type="button"
                >
                    <a href="/tentang-kami">Informasi Lebih Lanjut</a>
                </button>
            </div>
        </div>
    );
};

export default PasienRegisterButton;