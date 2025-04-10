"use client";
import { Circile, Input, Sunny, Night } from "@/componets";
import { useEffect, useState } from "react";
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCityName, setSelectedCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({});
  // console.log("ene bol usluuud:", countries);

  // console.log("songoson uls:", selectedCityName);

  useEffect(() => {
    async function fetchcountries() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );

        const result = await response.json();
        // console.log("serverees irsen:", data);

        setCountries(result.data);
      } catch (error) {
        console.error("aldaa :", error);
      }
    }
    fetchcountries();
  }, []);
  // console.log("saved data:", countries);

  const allCities = countries.flatMap((country) =>
    country.cities.map((city) => `${city},${country.country}`)
  );

  // console.log("end yu bna:", allCities);

  useEffect(() => {
    const weatherKey = process.env.NEXT_PUBLIC_WEATHERAPIKEY;
    async function fetchDataWeather() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${selectedCityName}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("fetchDataWeather aldaa:", error);
      }
    }

    fetchDataWeather();
  }, [selectedCityName]);
  // console.log("end yu bna:", weather);

  return (
    <div className="flex relative">
      <div className="bg-[#F3F4F6] h-screen w-1/2 flex flex-col  relative">
        <Sunny weather={weather} selectedCityName={selectedCityName} />
        <Input allCities={allCities} onCitySelect={setSelectedCityName} />
      </div>
      <div className="bg-[#0F141E] h-screen w-1/2  relative">
        <Night weather={weather} selectedCityName={selectedCityName} />
      </div>
      <Circile />
    </div>
  );
};

export default Home;
