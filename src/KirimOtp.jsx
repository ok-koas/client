import React from "react";

const KirimOtp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-64 md:w-80 lg:w-96 h-auto bg-white flex flex-col items-center justify-center p-5 gap-5 relative shadow-md rounded-lg">
        <span className="text-lg md:text-xl lg:text-2xl font-bold text-black">Enter OTP</span>
        <p className="text-xs md:text-sm lg:text-base text-black text-center leading-4">We have sent a verification code to your mobile number</p>
        <div className="w-full flex flex-row gap-2 md:gap-3 lg:gap-4 items-center justify-center">
          <input required maxLength="1" type="text" className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-blue-500 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300" />
          <input required maxLength="1" type="text" className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-blue-500 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300" />
          <input required maxLength="1" type="text" className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-blue-500 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300" />
          <input required maxLength="1" type="text" className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-blue-500 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300" />
        </div>
        <button className="w-full h-8 md:h-10 lg:h-12 bg-blue-500 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-600 transition duration-200" type="submit">Verify</button>
        <p className="text-xs md:text-sm lg:text-base text-black w-full flex flex-col items-center justify-center gap-1">Didn't receive the code? <button className="bg-transparent border-none text-blue-500 cursor-pointer text-lg font-bold">Resend Code</button></p>
      </form>
    </div>
  );
};

export default KirimOtp;
