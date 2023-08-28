"use client";
import { useState } from "react";
import CookieButton from "./components/CookieBtn";

const HomePage = () => {
  const [userPreference, setUserPreference] = useState(null);

  const setCookie = (preference) => {
    document.cookie = `userPreference=${preference}; expires=Mon, 04 Dec 23:59:59 GMT`;
    setUserPreference(preference);
  };

  return (
    <div className="w-full h-[100vh] bg-slate-800 pt-[50px]">
      <h1 className="font-bold text-xl bg-indigo-600 text-white text-center w-[250px] m-auto py-2 px-4 rounded cursor-pointer">
        Cookie Preferences
      </h1>
      {userPreference && <p>Current Preference: {userPreference}</p>}

      <div className="w-full pt-5 flex justify-center items-center gap-3">
      <CookieButton
        onClick={() => setCookie("theme: dark")}
        label="Set Dark" 
      />
      
     
      <CookieButton
        onClick={() => setCookie("language: en")}
        label="Set en"
      />
      </div>
     
    </div>
  );
};

export default HomePage;
