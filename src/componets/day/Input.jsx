// "use client";

import { MapPin, Search } from "lucide-react";
import { useState } from "react";

export const Input = ({ allCities, onCitySelect }) => {
  const [userInput, setUserInput] = useState("");
  const [showSuggestion, setShowsuggestion] = useState(false);
  const handleChange = (event) => {
    setUserInput(event.target.value);
    setShowsuggestion(true);
  };
  const handleClick = () => {
    setShowsuggestion(false);

    // console.log("hadnldeCllick ");
    // console.log("userinpit", userInput);

    onCitySelect(userInput);
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
    <div className=" absolute top-49 left-70 flex flex-col gap-y-5">
      <div className="flex gap-x-4  w-[567px] py-4 px-6 bg-white  rounded-3xl ">
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
            className="flex gap-x-4 rounded-3xl justify-between bg-white items-center px-6"
          >
            <MapPin />
            <button
              onClick={() => handleClick()}
              className="w-full px-6 font-bold text-[32px] rounded-3xl bg-white outline-none flex justify-start cursor-pointer"
            >
              {city}
            </button>
          </div>
        ))}
    </div>
  );
};
