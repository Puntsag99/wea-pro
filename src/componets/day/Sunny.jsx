import { Heart, House, MapPin, UserRound } from "lucide-react";

export const Sunny = ({ weather, selectedCityName }) => {
  console.log("important:", weather);

  const date = weather.forecast?.forecastday[0].date;
  const dayTemperature = weather.forecast?.forecastday[0].day.maxtemp_c;
  const conDition = weather.current?.condition.text;

  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  w-[414px] bg-white bg-opacity-75 px-10 py-[56px] flex flex-col items-center rounded-[48px]">
      <div className="flex items-center  w-[334px] justify-between ">
        <div className="flex flex-col">
          <h4 className="text-gray-400">{date}</h4>
          <h2 className="h-12 text-5xl font-extrabold text-gray-900">
            {selectedCityName}
          </h2>
        </div>

        <MapPin className="w-[32px] h-[32px] text-gray-600" />
      </div>

      <img src="/img/icon.png" alt="" className="mt-[49px]  " />
      <div className="mt-3 font-extrabold text-[110px] text-transparent  bg-clip-text bg-gradient-to-b from-black to-white">
        {dayTemperature}°
      </div>
      <h6 className="font-extrabold text-[rgb(119,124,206)] text-[24px] w-[318px]">
        {conDition}
      </h6>
      <div className="flex mt-[48px] w-[318px] justify-between">
        <House />
        <MapPin />
        <Heart />
        <UserRound />
      </div>
    </div>
  );
};
