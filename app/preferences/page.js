"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Preferences() {
  const [userPreference, setUserPreference] = useState(null);

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "userPreference") {
        setUserPreference(value);
        break;
      }
    }
  }, []);

  return (
    <div className="bg-indigo-500 p-6 shadow-md flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">User Preference</h1>
      {userPreference ? (
        <p>Current Preference: {userPreference}</p>
      ) : (
        <p>No preference set.</p>
      )}

      <Link href="/">
      <div  className="mt-5 bg-slate-800 px-3 py-2"> Go to home </div>
      </Link>
     
    </div>
  );
}
