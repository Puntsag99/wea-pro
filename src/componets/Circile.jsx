export const Circile = () => {
  const circle = [
    {
      name: "Cirlce",
      size: "140px",
    },

    {
      name: "Cirlce",
      size: "340px",
    },
    {
      name: "Cirlce",
      size: "540px",
    },
    {
      name: "Cirlce",
      size: "940px",
    },
  ];
  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 w-36 h-36 bg-[#F3F4F6] rounded-full">
      <div className="relative">
        <div className=" absolute w-9 h-10 bg-[#F3F4F6] -top-9 left-18 "></div>
        <div className=" absolute bg-[#0F141E] w-10 h-12 -top-10 left-18 rounded-bl-full"></div>
      </div>
      <div className="relative">
        <div className=" absolute w-10 h-10 bg-[#F3F4F6] top-35 left-18 "></div>
        <div className=" absolute bg-[#0F141E] w-10.5 h-12 top-34 left-18 rounded-tl-full"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
        {circle.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute  border-1 border-[#FFF] rounded-full "
              style={{
                width: item.size,
                height: item.size,
                left: `calc(-${item.size} / 2)`,
                top: `calc(-${item.size} / 2)`,
              }}
            />
          );
        })}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-5">
        <img src="/img/Group.png" alt="" className="w-[43.29px] h-[86px]" />

        <img src="/img/Vector.png" alt="" className="w-[43.29px] h-[86px]" />
      </div>
    </div>
  );
};
