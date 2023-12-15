"use client";
import React from "react";
import hero from "../public/hero.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-white rounded-lg shadow-lg">
        {/* Left Section with Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src={hero} alt="Hero Image" width={500} height={500} />
        </div>

        {/* Right Section with Content */}
        <div className="w-full md:w-1/2 px-4 md:px-8">
          {/* Heading Section */}
          <section className="mb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-blue-500 mb-2">
              A Modern Attendance System for Smart People.
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600">
              Keep your employees connected, informed, and engaged with Hajir.
            </h2>
          </section>

          {/* About Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-gray-600 mb-4">
              A modern attendance system designed for intelligent individuals.
              Enhance connectivity, foster informed decision-making, and boost
              engagement with Hajir.
            </p>
            <p className="text-gray-600">
              Over 50 businesses have benefited from Hajir, saving time, money,
              and valuable resources.
            </p>
          </section>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/sign-in"
              className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              href="/otp-verification"
              className="w-full md:w-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Otp verification
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
