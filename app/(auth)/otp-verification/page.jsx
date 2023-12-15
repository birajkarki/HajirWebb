"use client";
import Link from "next/link";
import { useState } from "react";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    const enteredOTP = otp.join("");
    console.log("Verifying OTP:", enteredOTP);

    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <form className="space-y-6" action="/otp-verification" method="POST">
          <Link href="/sign-in">Back to login</Link>
          <h1 className="text-3xl font-semibold mb-4">Enter OTP</h1>
          <div className="justify-center">
            <Link href="/dashboard">Go to Dashboard</Link>
          </div>

          <div className="flex justify-center space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-2xl border rounded focus:outline-none focus:border-blue-500"
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleVerify}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Verify
          </button>
          <p className="mt-4 text-gray-500">
            Do not receive OTP? Resend OTP in 2:59
          </p>
        </form>
      </div>
    </div>
  );
};

export default OTP;
