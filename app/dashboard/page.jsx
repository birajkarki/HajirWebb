import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <main>
      <h1 className="  mb-4 text-xl md:text-2xl">Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col pt-9 gap-5 bg-slate-400 h-full">
          <Link href="/company">COmpany</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        ha
      </div>
    </main>
  );
};

export default Dashboard;
