"use client";

import { MapPin, Search } from "lucide-react";
import { useState } from "react";

export const Input = ({ allCities, onCitySelect }) => {
  const [userInput, setUserInput] = useState("");
  const [showSuggestion, setShowsuggestion] = useState(false);
  const handleChange = (event) => {
    setUserInput(event.target.value);
    // userInput("");
    setShowsuggestion(true);
    // setUserInput("");
  };
  const handleClick = (city) => {
    setShowsuggestion(false);

    // console.log("hadnldeCllick ");
    // console.log("userinpit", userInput);

    onCitySelect(city);
  };
  // console.log("ene hooson bna uu:", allCities);
  const filteredCity = allCities
    .filter(
      (cityName) =>
        typeof cityName === "string" &&
        cityName.toLowerCase().startsWith(userInput.toLowerCase())
    )
    .slice(0, 4);

  // console.log("end yu bna:", filteredCity);

  return (
    <div className=" absolute top-29 left-55 flex flex-col gap-y-5">
      <div className="flex gap-x-4  w-[567px] py-4 px-6 bg-white  rounded-3xl z-10">
        <Search className="w-12 h-12 opacity-20" />
        <input
          value={userInput}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="font-bold text-[32px] w-full  outline-none"
        />
      </div>

      {userInput &&
        showSuggestion &&
        filteredCity.length > 0 &&
        filteredCity.map((city, index) => (
          <div
            key={index}
            className="flex gap-x-4 rounded-3xl justify-between bg-white items-center px-6 z-10"
          >
            <MapPin />
            <button
              onClick={() => handleClick(city)}
              className="px-6 font-bold text-[32px] w-full rounded-3xl bg-white outline-none flex justify-start cursor-pointer"
            >
              {city}
            </button>
          </div>
        ))}
    </div>
  );
};
