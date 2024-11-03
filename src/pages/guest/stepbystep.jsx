const StepByStep = () => {
  return (
    <>
      <div className="container mb-10 mx-auto px-8 md:px-40">
        <h1 className="text-xl sm:text-3xl font-bold mb-6 md:mb-3 lg:mb-0">
          Panduan Pengajuan Prestasi
        </h1>
        <div className="text-sm md:text-base">
          <ol className="list-decimal ml-5 mb-4">
            <li className="mb-2">
              Masuk ke menu <strong>Prestasi</strong> &gt; <strong>Daftar Prestasi</strong>
            </li>
            <li className="mb-2">
              Masukkan data prestasi sesuai dengan kategori yang ada
            </li>
            <li className="mb-2">
              Jumlah prestasi maksimum yang dapat di-input per kategori adalah <strong>20 prestasi</strong>
            </li>
            <li className="mb-2">
              Setelah selesai memasukkan data prestasi, masuk ke menu <strong>Prestasi</strong> &gt; <strong>Status Pengajuan</strong>
            </li>
            <li className="mb-2">
              Pilih prestasi yang ingin diajukan lalu klik tombol <strong>Ajukan</strong>
            </li>
            <li>
              Selanjutnya prestasi akan di-review dan disetujui oleh <strong>Dosen Pembimbing Akademik</strong> atau <strong>Manajer Kemahasiswaan Fakultas</strong>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default StepByStep;