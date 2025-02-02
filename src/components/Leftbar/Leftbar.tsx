"use client";

import Link from "next/link";
import React from "react";

const Leftbar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold text-center border-b border-gray-700">
        My Dashboard
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/articles"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
          <li>
            <span
              // onClick={() => logoutUser()}
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 cursor-pointer"
            >
              Logout
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Leftbar;
