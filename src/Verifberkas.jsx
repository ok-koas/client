import React, { useState } from "react";

const VerifBerkas = () => {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  // Allowed file types
  const allowedFileTypes = ["application/pdf", "image/jpeg", "image/png"];

  // Max file size in bytes (e.g., 5 MB)
  const maxFileSize = 5 * 1024 * 1024;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (allowedFileTypes.includes(file.type) && file.size <= maxFileSize) {
        setFileName(file.name);
        setError("");
      } else {
        setFileName("");
        setError("Invalid file type or file size too large.");
      }
    } else {
      setFileName("");
      setError("");
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (allowedFileTypes.includes(file.type) && file.size <= maxFileSize) {
        setFileName(file.name);
        setError("");
      } else {
        setFileName("");
        setError("Invalid file type or file size too large.");
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-20 ">
      <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Verifikasi Berkas</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="npm-str" className="mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">NPM Yarsi / Nomor STR</label>
            <input
              type="text"
              id="npm-str"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="NPM Yarsi / Nomor STR"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="file-upload" className="mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">Bukti KTM / STR</label>
            <div
              className="flex items-center justify-center w-full h-32 md:h-40 lg:h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12 text-blue-500"
                    viewBox="0 0 640 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                    ></path>
                  </svg>
                  <p className="pt-1 text-sm md:text-base lg:text-lg text-gray-500">
                    {fileName || "Click or drag file to this area to upload"}
                  </p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
            >
              Lanjut
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifBerkas;